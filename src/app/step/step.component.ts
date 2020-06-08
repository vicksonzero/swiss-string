import { Component, HostListener, Input, OnInit } from '@angular/core';
import { TABLET_PORTRAIT } from 'src/media';
import { IColumn, INodeInstance, IStep } from '../s/new-model/appDefinitions';
import { StepsService } from '../s/steps.service';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  isExpanded = true;
  isOrganizeMode = false;

  @Input() itemIndex: number;
  @Input() step: IStep;
  @Input() nodes: { [x: number]: INodeInstance };

  columns: IColumn[];
  summary: string;

  isMobile = false;

  constructor(private stepsService: StepsService) { }

  ngOnInit() {
    this.columns = this.step.columns;
    this.updateDeviceWidth();
    this.summary = 'Step';
  }

  onExpandButtonClick() {
    this.isExpanded = !this.isExpanded;
  }

  onClickRemoveStep() {
    this.stepsService.removeStep(this.step.stepID);
  }

  onTitleUpdated(val: any) {
    console.log('onTitleUpdated');
    this.step.title = val;
    this.stepsService.updateStep(this.step.stepID, this.step);
  }

  trackColumn(index: number, item: IColumn) {
    return item.nodeID;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateDeviceWidth();
  }
  updateDeviceWidth() {
    const innerWidth = window.innerWidth;

    this.isMobile = (innerWidth < TABLET_PORTRAIT);

  }

  setOrganizeMode(isOrganizeMode: boolean) {
    this.isOrganizeMode = isOrganizeMode;
  }

  onClickOrganize() {
    this.setOrganizeMode(true);
  }

  onClickEndOrganize() {
    this.setOrganizeMode(false);
  }

  onClickColumnChangeSize(columnID: number, delta: number) {
    this.stepsService.columnResize(this.step.stepID, columnID, delta);
  }

  onClickColumnArrange(columnID: number, delta: number) {
    this.stepsService.columnArrange(this.step.stepID, columnID, delta);
  }

  onColumnMoveToStep(columnID: number, newStepID: number) {
    this.stepsService.columnMoveToStep(this.step.stepID, columnID, newStepID);
  }

  onClickColumnRemove(columnID: number) {
    this.stepsService.columnRemove(this.step.stepID, columnID);
  }
}
