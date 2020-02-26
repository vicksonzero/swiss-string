import { Component, Input, OnInit } from '@angular/core';
import { OperatorWidget, ViewWidget, WidgetConfig, WidgetType } from '../s/Step';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  @Input() stepID: number;
  @Input() column: WidgetConfig;
  @Input() index: number;
  viewWidget: ViewWidget | null = null;
  operatorWidget: OperatorWidget | null = null;

  constructor() { }

  ngOnInit() {
    switch (this.column.type) {
      case WidgetType.VIEW:
        this.viewWidget = this.column as ViewWidget;
        break;
      case WidgetType.OPERATOR:
        this.operatorWidget = this.column as OperatorWidget;
        break;
    }
  }
}
