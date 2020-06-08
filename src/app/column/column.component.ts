import { Component, HostListener, Input, OnInit } from '@angular/core';
import { TABLET_LANDSCAPE } from 'src/media';
import { OperatorWidget, ViewWidget, WidgetConfig, WidgetType } from '../s/Step';
import { IColumn, INodeInstance } from '../s/new-model/appDefinitions';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {

  @Input() nodeInstance: INodeInstance;
  @Input() index: number;

  constructor() { }

}
