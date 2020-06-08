import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { mockSteps } from './mockSteps';
import { IStep } from './new-model/appDefinitions';
import { StepFactory } from './Step';

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

  columnResize(stepID: number, columnID: number, delta: number) {
    const oldStep = this.stepsSource.getValue().find(step => step.stepID === stepID);
    if (!oldStep) {
      throw new TypeError(`Step ID "${stepID}" not found`);
    }
    const oldColumn = oldStep.columns[columnID];
    const newHeight = Math.max(100, oldColumn.height + delta);
    oldStep.columns[columnID] = { ...oldColumn, height: newHeight };
    this.updateStep(stepID, oldStep);
  }

  columnArrange(stepID: number, columnID: number, delta: number) {
    const oldStep = this.stepsSource.getValue().find(step => step.stepID === stepID);
    if (!oldStep) {
      throw new TypeError(`Step ID "${stepID}" not found`);
    }
    if (oldStep.columns.length - 1 < columnID) {
      throw new TypeError(`Step "${stepID}" does not have column "${columnID}"`);
    }

    if (columnID + delta < 0) {
      throw new Error(`Column "${columnID} + (${delta})" cannot go negative`);
    }

    if (columnID + delta > oldStep.columns.length) {
      // Column ${columnID} + (${delta}) can go beyond array. will just be put at the end correctly
    }

    // cut and paste
    oldStep.columns.splice(
      columnID + delta, 0,
      oldStep.columns.splice(columnID, 1)[0]
    );

    this.updateStep(stepID, oldStep);
  }

  columnMoveToStep(stepID: number, columnID: number, newStepID: number) {
    const oldStep = this.stepsSource.getValue().find(step => step.stepID === stepID);
    const newStep = this.stepsSource.getValue().find(step => step.stepID === newStepID);
    if (!oldStep) {
      throw new TypeError(`Step ID "${stepID}" not found`);
    }

    if (!newStep) {
      throw new TypeError(`New Step ID "${newStepID}" not found`);
    }
    if (oldStep.columns.length - 1 < columnID) {
      throw new TypeError(`Step "${stepID}" does not have column "${columnID}"`);
    }

    const cutColumn = oldStep.columns.splice(columnID, 1)[0];
    this.updateStep(stepID, oldStep);

    newStep.columns.push(cutColumn);
    this.updateStep(newStepID, newStep);
  }

  columnRemove(stepID: number, columnID: number) {
    const oldStep = this.stepsSource.getValue().find(step => step.stepID === stepID);
    if (!oldStep) {
      throw new TypeError(`Step ID "${stepID}" not found`);
    }
    if (oldStep.columns.length - 1 < columnID) {
      throw new TypeError(`Step "${stepID}" does not have column "${columnID}"`);
    }

    // cut and paste
    oldStep.columns.splice(columnID, 1);

    this.updateStep(stepID, oldStep);
  }
}
