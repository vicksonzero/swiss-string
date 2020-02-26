import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ViewWidget } from '../s/Step';
import { StepsService } from '../s/steps.service';

@Component({
  selector: 'app-view-widget',
  templateUrl: './view-widget.component.html',
  styleUrls: ['./view-widget.component.scss']
})
export class ViewWidgetComponent implements OnInit {

  @Input() stepID: number;
  @Input() viewWidget: ViewWidget;
  @Input() index: number;

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
}
