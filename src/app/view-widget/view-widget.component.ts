import { Component, Input, OnInit } from '@angular/core';
import { ViewWidget, WidgetType } from '../s/Step';

@Component({
  selector: 'app-view-widget',
  templateUrl: './view-widget.component.html',
  styleUrls: ['./view-widget.component.scss']
})
export class ViewWidgetComponent implements OnInit {

  @Input() viewWidget: ViewWidget;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }
}
