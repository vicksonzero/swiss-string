import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { mockSteps } from './mockSteps';
import { IStep } from './new-model/appDefinitions';
import { Step, StepFactory } from './Step';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  stepsSource = new BehaviorSubject<IStep[]>(mockSteps.steps);
  steps$: Observable<IStep[]>;

  stepCounter = mockSteps.stepCounter;
  nodeCounter = mockSteps.nodeCounter;
  editorCounter = mockSteps.editorCounter;

  constructor() {
    this.steps$ = this.stepsSource.pipe(
      shareReplay(1),
    );
  }

  addStep() {
    const oldSteps = [...this.stepsSource.getValue()];

    oldSteps.push(StepFactory.createStep({ stepID: this.stepCounter, title: 'New Step' }));
    this.stepCounter += 1;
    this.stepsSource.next(oldSteps);
  }

  updateStep(stepID: number, newValue: IStep) {
    const oldSteps = [...this.stepsSource.getValue()];
    const positionID = oldSteps.findIndex(step => step.stepID === stepID);
    oldSteps[positionID] = StepFactory.createStep(newValue);

    this.stepsSource.next(oldSteps);
  }
  removeStep(stepID: number) {
    const oldSteps = [...this.stepsSource.getValue()];
    const positionID = oldSteps.findIndex(step => step.stepID === stepID);
    oldSteps.splice(positionID, 1);
    this.stepsSource.next(oldSteps);
  }
}
