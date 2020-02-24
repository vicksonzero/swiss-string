import { Component, OnInit } from '@angular/core';
import { Step } from '../s/Step';
import { StepsService } from '../s/steps.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  steps: Step[];
  isValid = false;

  stepsJSON = '';
  constructor(private stepsService: StepsService) {
    this.stepsService.steps$.subscribe((steps) => {
      this.steps = steps;
      this.stepsJSON = JSON.stringify(steps, null, 4);
    });
  }

  ngOnInit() {
  }

  onClickAddStep() {
    this.stepsService.addStep();
  }

  trackItem(index: number, item: Step) {
    return item.id;
  }

  onPaperChange(val: string) {
  }
}
