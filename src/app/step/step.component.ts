import { Component, HostListener, Input, OnInit } from '@angular/core';
import { faMinus, faPlus, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
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
  public faPlus = faPlus;
  public faMinus = faMinus;
  public faArrowUp = faArrowUp;
  public faArrowDown = faArrowDown;

  @Input() canArrangeUp: boolean;
  @Input() canArrangeDown: boolean;
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

  onClickAddNode() {
    this.stepsService.addColumn(this.step.stepID);
  }

  onClickOrganize() {
    this.setOrganizeMode(true);
  }

  onClickStepArrange(delta: number) {
    this.stepsService.arrangeStep(this.step.stepID, delta);
  }

  onClickEndOrganize() {
    this.setOrganizeMode(false);
  }

  onClickColumnChangeSize(nodeID: number, delta: number) {
    this.stepsService.columnResize(this.step.stepID, nodeID, delta);
  }

  onClickColumnArrange(nodeID: number, delta: number) {
    this.stepsService.columnArrange(this.step.stepID, nodeID, delta);
  }

  onColumnMoveToStep(nodeID: number, newStepID: number) {
    this.stepsService.columnMoveToStep(this.step.stepID, nodeID, newStepID);
  }

  onClickColumnRemove(nodeID: number) {
    this.stepsService.columnRemove(this.step.stepID, nodeID);
  }
}
