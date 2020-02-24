import { Component, HostListener, Input, OnInit } from '@angular/core';
import { TABLET_PORTRAIT } from 'src/media';
import { OperatorWidget, Step, ViewWidget, WidgetConfig, WidgetType } from '../s/Step';
import { StepsService } from '../s/steps.service';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  isExpanded = true;
  @Input() itemIndex: number;
  @Input() step: Step;
  columns: WidgetConfig[];
  summary: string;

  isMobile = false;

  constructor(private stepsService: StepsService) { }

  ngOnInit() {
    this.columns = this.step.columns;
    this.updateDeviceWidth();
    switch (this.step.type) {
      case WidgetType.VIEW:
        this.summary = this.columns.map(c => {
          return (c as ViewWidget).view.title;
        }).join(', ');
        break;
      case WidgetType.OPERATOR:
        this.summary = '[' + this.columns.map(c => {
          return (c as OperatorWidget).operator.title || (c as OperatorWidget).operator.type;
        }).join(', ') + ']';
        break;
      default:
        this.summary = 'Step';
    }
  }
  onExpandButtonClick() {
    this.isExpanded = !this.isExpanded;
  }

  onClickRemoveStep() {
    this.stepsService.removeStep(this.step.id);
  }

  onTitleUpdated(val: any) {
    console.log('onTitleUpdated');
    this.step.title = val;
    this.stepsService.updateStep(this.step.id, this.step);
  }

  trackColumn(index: number, item: WidgetConfig) {
    return item.id;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateDeviceWidth();
  }
  updateDeviceWidth() {
    const innerWidth = window.innerWidth;

    this.isMobile = (innerWidth < TABLET_PORTRAIT);

  }
}
