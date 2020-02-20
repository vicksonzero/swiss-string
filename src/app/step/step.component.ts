import { Component, OnInit, Input } from '@angular/core';
import { Step } from '../s/Step';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  isExpanded = true;
  @Input() step: Step;
  constructor() { }

  ngOnInit() {
  }
  onExpandButtonClick() {
    this.isExpanded = !this.isExpanded;
  }
}
