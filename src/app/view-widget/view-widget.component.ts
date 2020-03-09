import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { faMinus, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ViewWidget } from '../s/Step';
import { StepsService } from '../s/steps.service';

@Component({
  selector: 'app-view-widget',
  templateUrl: './view-widget.component.html',
  styleUrls: ['./view-widget.component.scss']
})
export class ViewWidgetComponent implements OnInit {

  public faPlus = faPlus;
  public faMinus = faMinus;
  public faTrashAlt = faTrashAlt;

  @Input() stepID: number;
  @Input() viewWidget: ViewWidget;
  @Input() index: number;
  @Input() isOrganizeMode = false;

  height = 300;

  constructor(private stepsService: StepsService, private elementRef: ElementRef<HTMLDivElement>) { }

  ngOnInit() {
  }

  onTitleUpdated(value: string) {
    this.viewWidget.view.title = value;
    this.stepsService.updateWidget(this.stepID, this.index, this.viewWidget);
  }

  elGetBoundingClientRect() {
    return this.elementRef.nativeElement.getBoundingClientRect();
  }

  onClickResizeButton(delta: number) {
    if (delta < 0) { this.height = Math.max(100, this.height - 100); }
    if (delta > 0) { this.height += 100; }
  }

  onClickTrash() {
    console.log('onClickTrash stub');
  }
}
