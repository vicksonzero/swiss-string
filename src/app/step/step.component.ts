import { AfterContentChecked, Component, HostListener, Input, OnInit } from '@angular/core';
import { faInfoCircle, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { TABLET_PORTRAIT } from 'src/media';
import { OperatorWidget, Step, ViewWidget, WidgetConfig, WidgetType } from '../s/Step';
import { StepsService } from '../s/steps.service';


export enum StepEditMode {
  DEFAULT = 'default',
  ORGANIZE = 'organize',
}
@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit, AfterContentChecked {

  public faPlus = faPlus;
  public faMinus = faMinus;
  public faInfoCircle = faInfoCircle;
  StepEditMode = StepEditMode;

  editMode: StepEditMode = StepEditMode.DEFAULT;
  isExpanded = true;
  @Input() itemIndex: number;
  @Input() step: Step;

  @Input() isNextStop: boolean;
  summary: string;

  isMobile = false;

  constructor(private stepsService: StepsService) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    this.updateDeviceWidth();
    switch (this.step.type) {
      case WidgetType.VIEW:
        this.summary = this.step.columns.map(c => {
          if (c.type !== WidgetType.VIEW) { return ''; }
          return (c as ViewWidget).view.title;
        }).join(', ');
        break;
      case WidgetType.OPERATOR:
        this.summary = '[' + this.step.columns.map(c => {
          if (c.type !== WidgetType.OPERATOR) { return ''; }
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

  onClickTypeSelector(widgetType: string) {
    this.step.type = widgetType as WidgetType;
    this.stepsService.updateStep(this.step.id, this.step);
  }

  changeToEditMode(stepEditMode: StepEditMode) {
    this.editMode = stepEditMode;
  }

  onClickOrganize() {
    this.changeToEditMode(StepEditMode.ORGANIZE);
  }

  onClickEndOrganize() {
    this.changeToEditMode(StepEditMode.DEFAULT);
  }

  onClickAddColumn() {
    this.stepsService.addWidget(this.step.id, this.step.type);
  }
}
