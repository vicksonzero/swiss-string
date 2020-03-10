import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { ContextDef } from './Context';
import { mockSteps } from './mockSteps';
import { OperatorWidget, Step, StepFactory, ViewWidget, WidgetConfig, WidgetType } from './Step';

export interface ContextHolder {
  [x: string]: { lastSeenColumnID: number, lastSeenStepIndex: number };
}

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  stepsSource = new BehaviorSubject<Step[]>(mockSteps);
  steps$: Observable<Step[]>;
  entities: (WidgetConfig | Step)[] = [];

  latestStepID = mockSteps.map(s => s.id).reduce((a, v) => Math.max(a, v), 0);
  contexts: ContextDef[];

  constructor() {
    this.steps$ = this.stepsSource.pipe(
      tap((steps) => this.updateContexts(steps)),
      shareReplay(1),
    );
  }

  addStep() {
    const oldSteps = [...this.stepsSource.getValue()];

    this.latestStepID += 1;
    oldSteps.push(StepFactory.createStep({ id: this.latestStepID, title: 'New Step' }));
    this.stepsSource.next(oldSteps);
  }

  updateStep(stepID: number, newValue: Step) {
    const oldSteps = [...this.stepsSource.getValue()];
    const positionID = oldSteps.findIndex(step => step.id === stepID);
    oldSteps[positionID] = StepFactory.createStep(newValue);
    console.log('updateStep', stepID, oldSteps[positionID]);
    this.stepsSource.next(oldSteps);
  }
  removeStep(stepID: number) {
    const oldSteps = [...this.stepsSource.getValue()];
    const positionID = oldSteps.findIndex(step => step.id === stepID);
    oldSteps.splice(positionID, 1);
    this.stepsSource.next(oldSteps);
  }

  addWidget(stepID: number, widgetType: string) {

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
    const contextHolder: ContextHolder = {}; // holds keys and last-seen widgetID
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
              stepIndex, stepID, columns as ViewWidget[], contextHolder, newContexts
            );
            newContexts.push(beforeContext);
          }
          break;
        case WidgetType.OPERATOR:
          {
            const beforeContext = this.updateOperatorWidgetContext(
              stepIndex, stepID, columns as OperatorWidget[], contextHolder, newContexts
            );
            newContexts.push(beforeContext);
          }
          break;
      }
      // console.log('contextHolder', { ...contextHolder });
    }
    // console.log('newContexts', JSON.stringify(newContexts, null, 4));
    this.contexts = newContexts;
  }

  updateViewWidgetContext(
    stepIndex: number, stepID: number,
    columns: ViewWidget[], contextHolder: ContextHolder, newContexts: ContextDef[]
  ) {
    // mutates contextHolder and newContexts in place
    const beforeContext: ContextDef = {
      beforeStepID: stepID,
      keys: [],
    };

    columns.forEach((column) => {
      const { id: columnID, type: columnType } = column;
      const viewWidget = column.view;
      const { name, title } = viewWidget;
      // console.log('view', name, columnID);

      if (contextHolder[name]) {
        const { lastSeenColumnID: lastSeenID, lastSeenStepIndex } = contextHolder[name];
        beforeContext.keys.push({
          name, fromStepIndex: lastSeenStepIndex,
          fromID: lastSeenID, toID: columnID, type: null,
        });
      }

      contextHolder[name] = { lastSeenColumnID: columnID, lastSeenStepIndex: stepIndex };
    });


    return beforeContext;
  }

  updateOperatorWidgetContext(
    stepIndex: number, stepID: number,
    columns: OperatorWidget[], contextHolder: ContextHolder, newContexts: ContextDef[]
  ) {
    // mutates contextHolder and newContexts in place
    const beforeContext: ContextDef = {
      beforeStepID: stepID,
      keys: [],
    };

    columns.forEach((column) => {
      const { id: columnID, type: columnType } = column;
      const operatorWidget = column.operator;
      const { inputs, outputs } = operatorWidget;

      Object.entries(inputs).forEach(([inputKey, { id: connectorID, contextName }]) => {
        // console.log('operator', contextName, connectorID);

        if (contextHolder[contextName]) {
          const { lastSeenColumnID: lastSeenID, lastSeenStepIndex } = contextHolder[contextName];
          beforeContext.keys.push({
            name: contextName, fromStepIndex: lastSeenStepIndex,
            fromID: lastSeenID, toID: connectorID, type: null,
          });
        }
        // contextHolder[inputKey] = columnID;
        // beforeContext.keys.push({ name:inputKey, fromID: columnID, toID: null, type: null });
      });

      Object.entries(outputs).forEach(([outputKey, { id: connectorID, contextName }]) => {
        contextHolder[contextName] = { lastSeenColumnID: connectorID, lastSeenStepIndex: stepIndex };
      });
    });

    return beforeContext;
  }
}
