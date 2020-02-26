import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { mockSteps } from './mockSteps';
import { Step, StepFactory, WidgetConfig } from './Step';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  stepsSource = new BehaviorSubject<Step[]>(mockSteps);
  steps$: Observable<Step[]>;

  latestStepID = mockSteps.map(s => s.id).reduce((a, v) => Math.max(a, v), 0);

  constructor() {
    this.steps$ = this.stepsSource.pipe(
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
}
