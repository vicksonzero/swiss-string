import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { mockSteps } from './mockSteps';
import { IStep } from './new-model/appDefinitions';
import { StepFactory } from './Step';
import { NodeService } from './node.service';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  stepsSource = new BehaviorSubject<IStep[]>(mockSteps.steps);
  steps$: Observable<IStep[]>;

  stepCounter = mockSteps.stepCounter;
  nodeCounter = mockSteps.nodeCounter;
  editorCounter = mockSteps.editorCounter;

  constructor(private nodeService: NodeService) {
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
    const stepIndex = oldSteps.findIndex(step => step.stepID === stepID);
    if (stepIndex < 0) {
      throw new Error(`Step Index "${stepIndex}" Not found`);
    }
    oldSteps[stepIndex] = StepFactory.createStep(newValue);

    this.stepsSource.next(oldSteps);
  }

  arrangeStep(stepID: number, delta: number) {
    const oldSteps = [...this.stepsSource.getValue()];
    const stepIndex = oldSteps.findIndex(step => step.stepID === stepID);

    if (stepIndex < 0) {
      throw new Error(`Step Index "${stepIndex}" Not found`);
    }

    if (stepIndex + delta < 0) {
      throw new Error(`Column "${stepIndex} + (${delta})" cannot go negative`);
    }

    if (stepIndex + delta > oldSteps.length) {
      // Column ${stepIndex} + (${delta}) can go beyond array. will just be put at the end correctly
    }

    // cut and paste
    oldSteps.splice(
      stepIndex + delta, 0,
      oldSteps.splice(stepIndex, 1)[0]
    );

    this.stepsSource.next(oldSteps);
  }

  removeStep(stepID: number) {
    const oldSteps = [...this.stepsSource.getValue()];
    const stepIndex = oldSteps.findIndex(step => step.stepID === stepID);
    oldSteps.splice(stepIndex, 1);
    this.stepsSource.next(oldSteps);
  }

  addColumn(stepID: number) {
    const oldStep = this.stepsSource.getValue().find(step => step.stepID === stepID);
    if (!oldStep) {
      throw new TypeError(`Step ID "${stepID}" not found`);
    }

    const newNode = this.nodeService.createNode();

    oldStep.columns.push({
      nodeID: newNode.nodeID,
      width: 1,
      height: 300,
    });

    this.updateStep(stepID, oldStep);
  }

  columnResize(stepID: number, nodeID: number, delta: number) {
    const oldStep = this.stepsSource.getValue().find(step => step.stepID === stepID);
    if (!oldStep) {
      throw new TypeError(`Step ID "${stepID}" not found`);
    }
    const columnID = oldStep.columns.findIndex((col) => col.nodeID === nodeID);
    if (columnID < 0) {
      throw new TypeError(`column ID "${columnID}" not found in Step ID "${stepID}"`);
    }
    const oldColumn = oldStep.columns[columnID];
    const newHeight = Math.max(100, oldColumn.height + delta);
    oldStep.columns[columnID] = { ...oldColumn, height: newHeight };
    this.updateStep(stepID, oldStep);
  }

  columnArrange(stepID: number, nodeID: number, delta: number) {
    const oldStep = this.stepsSource.getValue().find(step => step.stepID === stepID);
    if (!oldStep) {
      throw new TypeError(`Step ID "${stepID}" not found`);
    }
    const columnID = oldStep.columns.findIndex((col) => col.nodeID === nodeID);
    if (columnID < 0) {
      throw new TypeError(`column ID "${columnID}" not found in Step ID "${stepID}"`);
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

  columnArrangeToStep(stepID: number, nodeID: number, delta: number) {
    const oldSteps = [...this.stepsSource.getValue()];

    const stepIndex = oldSteps.findIndex(step => step.stepID === stepID);
    if (stepIndex < 0) {
      throw new Error(`Step Index "${stepIndex}" Not found`);
    }

    const newStep = oldSteps[stepIndex + delta];
    if (!newStep) {
      throw new Error(`Cannot move step from index "${stepIndex}" to "${stepIndex + delta}"`);
    }

    this.columnMoveToStep(
      stepID,
      nodeID,
      newStep.stepID,
      delta <= 0
    );
  }

  columnMoveToStep(stepID: number, nodeID: number, newStepID: number, isTail: boolean = true) {
    const oldStep = this.stepsSource.getValue().find(step => step.stepID === stepID);
    const newStep = this.stepsSource.getValue().find(step => step.stepID === newStepID);
    if (!oldStep) {
      throw new TypeError(`Step ID "${stepID}" not found`);
    }

    if (!newStep) {
      throw new TypeError(`New Step ID "${newStepID}" not found`);
    }
    const columnID = oldStep.columns.findIndex((col) => col.nodeID === nodeID);
    if (columnID < 0) {
      throw new TypeError(`column ID "${columnID}" not found in Step ID "${stepID}"`);
    }
    if (oldStep.columns.length - 1 < columnID) {
      throw new TypeError(`Step "${stepID}" does not have column "${columnID}"`);
    }

    const cutColumn = oldStep.columns.splice(columnID, 1)[0];
    this.updateStep(stepID, oldStep);

    if (isTail) {
      newStep.columns.push(cutColumn);
    } else {
      newStep.columns.unshift(cutColumn);
    }
    this.updateStep(newStepID, newStep);
  }

  columnRemove(stepID: number, nodeID: number) {
    const oldStep = this.stepsSource.getValue().find(step => step.stepID === stepID);
    if (!oldStep) {
      throw new TypeError(`Step ID "${stepID}" not found`);
    }
    const columnID = oldStep.columns.findIndex((col) => col.nodeID === nodeID);
    if (columnID < 0) {
      throw new TypeError(`column ID "${columnID}" not found in Step ID "${stepID}"`);
    }
    if (oldStep.columns.length - 1 < columnID) {
      throw new TypeError(`Step "${stepID}" does not have column "${columnID}"`);
    }

    // cut and paste
    oldStep.columns.splice(columnID, 1);

    this.updateStep(stepID, oldStep);
  }
}
