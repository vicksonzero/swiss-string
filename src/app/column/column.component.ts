import { Component, HostListener, Input, OnInit } from '@angular/core';
import { TABLET_LANDSCAPE } from 'src/media';
import { OperatorWidget, ViewWidget, WidgetConfig, WidgetType } from '../s/Step';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  @Input() column: WidgetConfig;
  @Input() index: number;
  viewWidget: ViewWidget | null = null;
  operatorWidget: OperatorWidget | null = null;

  constructor() { }

  ngOnInit() {
    console.log(this.column.type, WidgetType.VIEW);

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
