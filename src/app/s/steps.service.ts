import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { mockSteps } from './mockSteps';
import { Step } from './Step';

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
    oldSteps.push(new Step({ id: this.latestStepID, title: 'New Step', type: 'Generic Step' }));
    this.stepsSource.next(oldSteps);
  }

  updateStep(stepID: number, newValue: Step) {
    const oldSteps = [...this.stepsSource.getValue()];
    const positionID = oldSteps.findIndex(step => step.id === stepID);
    oldSteps[positionID] = new Step(newValue);

    this.stepsSource.next(oldSteps);
  }
  removeStep(stepID: number) {
    const oldSteps = [...this.stepsSource.getValue()];
    const positionID = oldSteps.findIndex(step => step.id === stepID);
    oldSteps.splice(positionID, 1);
    this.stepsSource.next(oldSteps);
  }
}
