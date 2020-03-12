import { Injectable } from '@angular/core';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { OperatorWidget, Step, StepUtils, ViewWidget } from './Step';
import { StepsService } from './steps.service';

export interface EntityData {
  contextName: string;
  content: any;
}

export interface EntityDataChange {
  event: 'create' | 'update' | 'delete';
  index: number;
  old: EntityData;
}
tap();

@Injectable({
  providedIn: 'root'
})
export class RuntimeService {

  entities: { [x: number]: EntityData } = {} as any;
  entitiesChangedSource$: Observable<EntityDataChange[]>;
  entitiesUpdatesSource$ = new BehaviorSubject<EntityDataChange[]>([]);
  entitiesChanged$: Observable<number[]>;

  constructor(private stepsService: StepsService) {
    this.entitiesChangedSource$ = merge(
      this.entitiesUpdatesSource$,
      this.stepsService.steps$.pipe(
        map((steps) => this.updateEntitiesAndDispatchDelta(steps)),
      ),
    ).pipe(
      // tap((entityDataChanges) => console.log('entitiesChangedSource$', this.entities)),
    );
    this.entitiesChanged$ = this.entitiesChangedSource$.pipe(
      map((entityDataChanges) => entityDataChanges.map(entityDataChange => entityDataChange.index)),
    );
  }

  // also mutates this.entities
  updateEntitiesAndDispatchDelta(steps: Step[]) {
    const changedEntities: EntityDataChange[] = [];
    StepUtils.iterateOperators({
      steps,
      viewCallback: (viewWidget: ViewWidget) => {
        const { id: widgetID, view } = viewWidget;
        const entityData: EntityData = this.entities[widgetID] || { contextName: view.name, content: null };

        if (!this.entities[widgetID]) {
          changedEntities.push({ event: 'create', index: widgetID, old: { contextName: view.name, content: null } });
          entityData.content = view.default;
        }

        this.entities[widgetID] = entityData;
      },
      operatorCallback: (operatorWidget: OperatorWidget) => {
        const { operator } = operatorWidget;
        Object.entries(operator.inputs)
          .forEach(([inputKey, { id: widgetID, contextName }], i) => {
            const entityData: EntityData = this.entities[widgetID] || { contextName, content: null };

            if (!this.entities[widgetID]) {
              changedEntities.push({ event: 'create', index: widgetID, old: { contextName, content: null } });
            }
            this.entities[widgetID] = entityData;
          });
        Object.entries(operator.outputs)
          .forEach(([outputKey, { id: widgetID, contextName }], i) => {
            const entityData: EntityData = this.entities[widgetID] || { contextName, content: null };

            if (!this.entities[widgetID]) {
              changedEntities.push({ event: 'create', index: widgetID, old: { contextName, content: null } });
            }
            this.entities[widgetID] = entityData;
          });
      },
    });
    return changedEntities;
  }

  updateContent(entityID: number, content: any) {
    const old = { ...this.entities[entityID] };
    this.entities[entityID].content = content;
    this.entitiesUpdatesSource$.next([{ event: 'update' as 'update', index: entityID, old }]);
  }

  onClickNext(beforeStepID: number) {
    console.log(`onClickNext beforeStepID: ${beforeStepID}`);

    // this.stepsService
  }
}
