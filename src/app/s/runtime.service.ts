import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, EMPTY, merge, Observable, ReplaySubject, Subject } from 'rxjs';
import { map, shareReplay, startWith, tap } from 'rxjs/operators';
import { ContextDef, ContextSubjectHolder } from './Context';
import { operators } from './operators';
import { OperatorWidget, Step, StepUtils, ViewWidget } from './Step';
import { StepsService } from './steps.service';

export interface EntityData {
  entityID: number;
  input$: Observable<any>;
  process$: Observable<any>;
  output$: Observable<any>;
  inputUpdated$: Subject<any>;
}

export interface EntityDataChange {
  event: 'create' | 'update' | 'delete';
  index: number;
  old: EntityData;
}


@Injectable({
  providedIn: 'root'
})
export class RuntimeService {

  // entities: { [x: number]: EntityData } = {} as any;
  // entitiesChangedSource$: Observable<EntityDataChange[]>;
  // entitiesUpdatesSource$ = new BehaviorSubject<EntityDataChange[]>([]);
  entitiesChanged$: Observable<{ [x: number]: EntityData }>;
  entitySubjects: { [x: number]: EntityData } = {} as any;

  operators = operators;

  constructor(private stepsService: StepsService) {
    this.entitiesChanged$ = this.stepsService.steps$.pipe(
      map((steps) => this.updateEntitySubjects(steps)),
      tap((val) => console.log('entitiesChanged')),
      shareReplay(),
    );
    // this.entitiesChangedSource$ = merge(
    //   this.entitiesUpdatesSource$,
    //   this.stepsService.steps$.pipe(
    //     map((steps) => this.updateEntitiesAndDispatchDelta(steps)),
    //   ),
    // ).pipe(
    //   // tap((entityDataChanges) => console.log('entitiesChangedSource$', this.entities)),
    // );
    // this.entitiesChanged$ = this.entitiesChangedSource$.pipe(
    //   map((entityDataChanges) => entityDataChanges.map(entityDataChange => entityDataChange.index)),
    // );
  }

  updateEntitySubjects(steps: Step[]) {
    const contextSubjectHolders: ContextSubjectHolder[] = [{}];
    StepUtils.iterateOperators({
      steps,
      viewCallback: (viewWidget: ViewWidget, stepID: number, stepIndex: number) => {
        const { id: widgetID, view } = viewWidget;
        const contextSubjectHolder = { ...contextSubjectHolders[contextSubjectHolders.length - 1] };

        const { name } = view;
        console.log(`Step ${stepID} view[${widgetID}] ${name} input$ would be`, contextSubjectHolder[name]);
        const input$ = (contextSubjectHolder[name] || new BehaviorSubject(view.default)).pipe(
          startWith(view.default),
          tap((val) => console.log(`${widgetID} view ${name} input$ triggered`, val)),
          shareReplay(),
        );

        const inputUpdated$ = new ReplaySubject<any>();

        // const input$ = stepIndex === 0 ? of(view.default) : this.entitySubjects[];
        const process$ = merge(
          input$,
          inputUpdated$.pipe(tap((val) => console.log(`${widgetID} view ${name} inputUpdated$ triggered`, val)))
        ).pipe(
          tap((val) => console.log(`${widgetID} view ${name} process$ triggered`, val)),
          shareReplay(),
        );
        const output$ = process$.pipe(
          tap((val) => console.log(`${widgetID} view ${name} output$ triggered`, val)),
          shareReplay(),
        );
        (output$ as any).name = `${widgetID} output$`;

        output$.subscribe({
          next: () => console.log(`${widgetID} view ${name} output$ subscribe triggered`),
          complete: () => console.log(`${widgetID} view complete`)
        });
        contextSubjectHolder[name] = output$;

        this.entitySubjects[widgetID] = {
          entityID: widgetID,
          input$,
          process$,
          output$,
          inputUpdated$,
        };

        contextSubjectHolders.push(contextSubjectHolder);
      },
      operatorCallback: (operatorWidget: OperatorWidget, stepID: number, stepIndex: number) => {
        const { id: columnID, operator } = operatorWidget;
        const { type } = operator;

        const contextSubjectHolder = { ...contextSubjectHolders[contextSubjectHolders.length - 1] };

        const inputList = Object.entries(operator.inputs)
          .map(([inputKey, { id: widgetID, contextName }], i) => {
            console.log(`Step ${stepID} operator[${columnID}] ${contextName} input$ would be`, contextSubjectHolder[contextName]);
            return { inputKey, observable: contextSubjectHolder[contextName] || EMPTY };
          })
          // .reduce((obj, { inputKey, observable }) => ({ ...obj, [inputKey]: observable }), {})
          ;

        console.log('inputList', inputList);
        const input$: Observable<{ [x: string]: any }> = combineLatest(inputList.map(({ observable }) => observable)).pipe(
          map((values) => {
            return inputList.reduce((obj, { inputKey }, i) => ({ ...obj, [inputKey]: values[i] }), {});
          }),
          tap((args) => console.log(`${columnID} operator ${type} input$ triggered`, args)),
        ); // TODO: typescript types

        // const input$ = stepIndex === 0 ? of(view.default) : this.entitySubjects[];
        const process$: Observable<{ [x: string]: any }> = input$.pipe(
          tap((args) => console.log(`${columnID} operator ${type} process$ triggered`, args)),
          map((args) => this.operators[type].run(args)),
          tap((args) => console.log(`${columnID} operator ${type} process$ completed`, args)),
        );
        const output$: Observable<{ [x: string]: any }> = process$.pipe(
          map((val) => {
            return Object.entries(operator.outputs)
              .reduce((obj, [outputKey, { id: widgetID, contextName }]) => {
                return {
                  ...obj,
                  [contextName]: val[outputKey] == null ? '' : val[outputKey],
                };
              }, {});
          }),
          tap((val) => console.log(`${columnID} operator ${type} output$ triggered`, val)),
          shareReplay(),
        );
        (output$ as any).name = `${columnID} output$`;

        Object.entries(operator.outputs)
          .forEach(([outputKey, { id: widgetID, contextName }], i) => {
            contextSubjectHolder[contextName] = output$.pipe(
              map((val) => val[contextName] == null ? '' : val[contextName]),
            );
          });
        contextSubjectHolders.push(contextSubjectHolder);
      },
    });

    (window as any).contextSubjectHolders = contextSubjectHolders; // Debug
    console.log('this.entitySubjects', this.entitySubjects);

    // this.connectEntitySubjects(steps, this.stepsService.contexts);
    return this.entitySubjects;
  }

  connectEntitySubjects(steps: Step[], contexts: ContextDef[]) {
    contexts.forEach((context) => {
      const { beforeStepID, keys } = context;
      keys.forEach((key) => {
        const { fromID, toID, name } = key;
        debugger;

        this.entitySubjects[fromID].output$.subscribe((output) => {

          this.entitySubjects[toID].inputUpdated$.next(output);
        });
      });
    });
  }

  // // also mutates this.entities
  // updateEntitiesAndDispatchDelta(steps: Step[]) {
  //   const changedEntities: EntityDataChange[] = [];
  //   StepUtils.iterateOperators({
  //     steps,
  //     viewCallback: (viewWidget: ViewWidget) => {
  //       const { id: widgetID, view } = viewWidget;
  //       const entityData: EntityData = this.entities[widgetID] || { contextName: view.name, content: null };

  //       if (!this.entities[widgetID]) {
  //         changedEntities.push({ event: 'create', index: widgetID, old: { contextName: view.name, content: null } });
  //         entityData.content = view.default;
  //       }

  //       this.entities[widgetID] = entityData;
  //     },
  //     operatorCallback: (operatorWidget: OperatorWidget) => {
  //       const { operator } = operatorWidget;
  //       Object.entries(operator.inputs)
  //         .forEach(([inputKey, { id: widgetID, contextName }], i) => {
  //           const entityData: EntityData = this.entities[widgetID] || { contextName, content: null };

  //           if (!this.entities[widgetID]) {
  //             changedEntities.push({ event: 'create', index: widgetID, old: { contextName, content: null } });
  //           }
  //           this.entities[widgetID] = entityData;
  //         });
  //       Object.entries(operator.outputs)
  //         .forEach(([outputKey, { id: widgetID, contextName }], i) => {
  //           const entityData: EntityData = this.entities[widgetID] || { contextName, content: null };

  //           if (!this.entities[widgetID]) {
  //             changedEntities.push({ event: 'create', index: widgetID, old: { contextName, content: null } });
  //           }
  //           this.entities[widgetID] = entityData;
  //         });
  //     },
  //   });
  //   return changedEntities;
  // }

  updateContent(entityID: number, content: any) {
    console.log('updateContent', entityID, content);
    this.entitySubjects[entityID].inputUpdated$.next(content);
    console.log('updateContent done', entityID, content);
  }

  onClickNext(beforeStepID: number) {
    console.log(`onClickNext beforeStepID: ${beforeStepID}`);

    // this.stepsService
  }
}
