import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { ContextDef } from './Context';
import { mockSteps } from './mockSteps';
import { OperatorWidget, Step, StepFactory, ViewWidget, WidgetConfig, WidgetType } from './Step';

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
    const contextHolder: { [x: string]: { lastSeenColumnID: number, lastSeenStepIndex: number } } = {}; // holds keys and last-seen widgetID
    for (let stepIndex = 0; stepIndex < steps.length; stepIndex++) {
      const step = steps[stepIndex];
      // const nextStep = steps[i + 1];
      const { id: stepID, columns, type } = step;
      // console.log('step', i, id);

      if (this.entities[stepID]) {
        throw new Error(`Duplicate entityID "${stepID}" in index "${stepIndex}"`);
      }
      this.entities[stepID] = step;

      const afterContext: ContextDef = {
        afterStepID: stepID,
        keys: [],
      };

      switch (type) {
        case WidgetType.VIEW:
          {
            columns.forEach((column) => {
              const { id: columnID, type: columnType } = column;
              const viewWidget = (column as ViewWidget).view;
              const { name, title } = viewWidget;
              // console.log('view', name, columnID);

              if (contextHolder[name]) {
                const { lastSeenColumnID: lastSeenID } = contextHolder[name];
                for (const context of newContexts) {
                  for (const key of context.keys) {
                    if (key.fromID === lastSeenID) {
                      key.toID = columnID;
                      key.destStepIndex = stepIndex;
                    }
                  }
                }
              }

              contextHolder[name] = { lastSeenColumnID: columnID, lastSeenStepIndex: stepIndex };
              afterContext.keys.push({ name, destStepIndex: stepIndex, fromID: columnID, toID: null, type: null });
              // afterContext.types.push(name);
            });
          }
          break;
        case WidgetType.OPERATOR:
          {
            columns.forEach((column) => {
              const { id: columnID, type: columnType } = column;
              const operatorWidget = (column as OperatorWidget).operator;
              const { inputs, outputs } = operatorWidget;

              Object.entries(inputs).forEach(([inputKey, { id: connectorID, contextName }]) => {
                // console.log('operator', contextName, connectorID);

                const { lastSeenColumnID: lastSeenID, lastSeenStepIndex } = contextHolder[contextName];
                for (const context of newContexts) {
                  for (const key of context.keys) {
                    if (key.fromID === lastSeenID) {
                      key.toID = connectorID;
                      key.destStepIndex = stepIndex;
                    }

                  }
                }
                // contextHolder[inputKey] = columnID;
                // afterContext.keys.push({ name:inputKey, fromID: columnID, toID: null, type: null });
              });

              Object.entries(outputs).forEach(([outputKey, { id: connectorID, contextName }]) => {
                contextHolder[contextName] = { lastSeenColumnID: connectorID, lastSeenStepIndex: stepIndex };
                afterContext.keys.push({ name: contextName, destStepIndex: null, fromID: connectorID, toID: null, type: null });
              });
            });
          }
          break;
      }
      // console.log('contextHolder', { ...contextHolder });
      newContexts.push(afterContext);
    }
    // console.log('newContexts', JSON.stringify(newContexts, null, 4));
    this.contexts = newContexts;
  }
}
