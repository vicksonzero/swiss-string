import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { ContextDef, ContextHolder } from './Context';
import { mockSteps } from './mockSteps';
import { OperatorConnectors } from './Operator';
import { OperatorWidget, Step, StepUtils, ViewWidget, WidgetConfig, WidgetType } from './Step';


@Injectable({
  providedIn: 'root'
})
export class StepsService {
  private stepsSource = new BehaviorSubject<Step[]>(mockSteps);
  steps$: Observable<Step[]>;
  entities: (Step | WidgetConfig | OperatorConnectors)[] = [];

  latestStepID = mockSteps.map(s => s.id).reduce((a, v) => Math.max(a, v), 0);
  contexts: ContextDef[];
  contextHolders: ContextHolder[];

  constructor() {
    this.steps$ = this.stepsSource.pipe(
      tap((steps) => this.updateContexts(steps)),
      shareReplay(1),
      tap((steps) => console.log('steps', steps, this.contexts)),
    );
  }

  addStep() {
    const oldSteps = [...this.stepsSource.getValue()];

    oldSteps.push(StepUtils.createStep({ id: this.entities.length, title: 'New Step' }));
    this.stepsSource.next(oldSteps);
  }

  updateStep(stepID: number, newValue: Step) {
    const oldSteps = [...this.stepsSource.getValue()];
    const positionID = oldSteps.findIndex(step => step.id === stepID);
    oldSteps[positionID] = StepUtils.createStep(newValue);
    // console.log('updateStep', stepID, oldSteps[positionID]);
    this.stepsSource.next(oldSteps);
  }
  removeStep(stepID: number) {
    const oldSteps = [...this.stepsSource.getValue()];
    const positionID = oldSteps.findIndex(step => step.id === stepID);
    oldSteps.splice(positionID, 1);
    this.stepsSource.next(oldSteps);
  }

  addWidget(stepID: number, widgetType: WidgetType) {
    let entityID = this.entities.length;
    const column: WidgetConfig = {
      id: entityID++,
      width: 1,
      widthUnit: 'flex',
      type: widgetType,
    };

    switch (widgetType) {
      case WidgetType.VIEW:
        {
          (column as ViewWidget).type = WidgetType.VIEW;
          (column as ViewWidget).view = {
            default: 'view',
            name: 'view',
            title: 'View',
            type: 'textarea',
          };
        }
        break;
      case WidgetType.OPERATOR:
        {
          (column as OperatorWidget).type = WidgetType.OPERATOR;
          (column as OperatorWidget).operator = {
            type: 'operator',
            title: 'operator',
            inputs: {
              in: { id: entityID++, contextName: 'context_in' }
            },
            outputs: {
              out: { id: entityID++, contextName: 'context_out' }
            },
          };
        }
        break;
    }
    const targetStep = this.stepsSource.getValue().find(step => step.id === stepID);
    if (!targetStep) {
      throw new TypeError(`Step ID "${stepID}" not found`);
    }
    targetStep.columns.push(column);

    this.updateStep(stepID, targetStep);
  }

  updateWidget(stepID: number, widgetIndex: number, widget: WidgetConfig) {
    const targetStep = this.stepsSource.getValue().find(step => step.id === stepID);
    if (!targetStep) {
      throw new TypeError(`Step ID "${stepID}" not found`);
    }
    targetStep.columns[widgetIndex] = widget;

    this.updateStep(stepID, targetStep);
  }

  updateContexts(steps: Step[]) {
    this.entities = [];
    const newContexts: ContextDef[] = [];
    const contextHolders: ContextHolder[] = [{}]; // holds keys and last-seen widgetID
    for (let stepIndex = 0; stepIndex < steps.length; stepIndex++) {
      const step = steps[stepIndex];
      // const nextStep = steps[i + 1];
      const { id: stepID, columns, type } = step;
      // console.log('step', i, id);

      if (this.entities[stepID]) {
        throw new Error(`Duplicate entityID "${stepID}" in index "${stepIndex}"`);
      }
      this.entities[stepID] = step;

      switch (type) {
        case WidgetType.VIEW:
          {
            const beforeContext = this.updateViewWidgetContext(
              stepIndex, stepID,
              columns as ViewWidget[], contextHolders, newContexts,
              this.entities
            );
            newContexts.push(beforeContext);
          }
          break;
        case WidgetType.OPERATOR:
          {
            const beforeContext = this.updateOperatorWidgetContext(
              stepIndex, stepID,
              columns as OperatorWidget[], contextHolders, newContexts,
              this.entities
            );
            newContexts.push(beforeContext);
          }
          break;
      }
      // console.log('contextHolder', { ...contextHolder });
    }
    // console.log('newContexts', JSON.stringify(newContexts, null, 4));
    this.contexts = newContexts;
    this.contextHolders = contextHolders;
  }

  updateViewWidgetContext(
    stepIndex: number, stepID: number,
    columns: ViewWidget[], contextHolders: ContextHolder[], newContexts: ContextDef[],
    entitiesList: (Step | WidgetConfig | OperatorConnectors)[]
  ) {
    // mutates contextHolder and newContexts in place
    const beforeContext: ContextDef = {
      beforeStepID: stepID,
      keys: [],
    };
    const contextHolder = { ...contextHolders[contextHolders.length - 1] };

    columns.forEach((column) => {
      const { id: columnID, type: columnType } = column;
      const viewWidget = column.view;
      const { name, title } = viewWidget;
      // console.log('view', name, columnID);

      if (contextHolder[name]) {
        const { lastSeenColumnID: lastSeenID, lastSeenStepIndex } = contextHolder[name];
        beforeContext.keys.push({
          name,
          fromStepIndex: lastSeenStepIndex,
          type: null,
          fromID: lastSeenID, toID: columnID,
        });
      }
      entitiesList[columnID] = column;
      contextHolder[name] = { lastSeenColumnID: columnID, lastSeenStepIndex: stepIndex };
    });

    contextHolders.push(contextHolder);
    return beforeContext;
  }

  updateOperatorWidgetContext(
    stepIndex: number, stepID: number,
    columns: OperatorWidget[], contextHolders: ContextHolder[], newContexts: ContextDef[],
    entitiesList: (Step | WidgetConfig | OperatorConnectors)[]
  ) {
    // mutates contextHolder and newContexts in place
    const beforeContext: ContextDef = {
      beforeStepID: stepID,
      keys: [],
    };
    const contextHolder = { ...contextHolders[contextHolders.length - 1] };

    columns.forEach((column) => {
      const { id: columnID, type: columnType, operator } = column;
      const operatorWidget = operator;
      const { inputs, outputs } = operatorWidget;

      Object.entries(inputs).forEach(([inputKey, { id: connectorID, contextName }]) => {
        // console.log('operator', contextName, connectorID);

        entitiesList[connectorID] = { id: connectorID, contextName };
        if (contextHolder[contextName]) {
          const { lastSeenColumnID: lastSeenID, lastSeenStepIndex } = contextHolder[contextName];
          beforeContext.keys.push({
            name: contextName,
            fromStepIndex: lastSeenStepIndex,
            type: null,
            fromID: lastSeenID, toID: connectorID,
          });
        }
        // contextHolder[inputKey] = columnID;
        // beforeContext.keys.push({ name:inputKey, fromID: columnID, toID: null, type: null });
      });

      Object.entries(outputs).forEach(([outputKey, { id: connectorID, contextName }]) => {
        entitiesList[connectorID] = { id: connectorID, contextName };
        contextHolder[contextName] = { lastSeenColumnID: connectorID, lastSeenStepIndex: stepIndex };
      });
    });

    contextHolders.push(contextHolder);
    return beforeContext;
  }
}
