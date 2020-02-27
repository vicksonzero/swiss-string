import { Component, Input, OnInit } from '@angular/core';
import { OperatorConnectors } from '../s/Operator';
import { OperatorWidget } from '../s/Step';

@Component({
  selector: 'app-operator-widget',
  templateUrl: './operator-widget.component.html',
  styleUrls: ['./operator-widget.component.scss']
})
export class OperatorWidgetComponent implements OnInit {

  @Input() stepID: number;
  @Input() operatorWidget: OperatorWidget;
  @Input() index: number;

  inputs: OperatorConnectors[] = [];
  outputs: OperatorConnectors[] = [];

  constructor() { }

  ngOnInit() {
    this.inputs = Object.entries(this.operatorWidget.operator.inputs).map(([k, v]) => v);
    this.outputs = Object.entries(this.operatorWidget.operator.outputs).map(([k, v]) => v);
    // console.log(this.inputs, this.outputs);
  }
}
