import { Component, OnInit } from '@angular/core';
import { StepsService } from '../s/steps.service';
import { Step } from '../s/Step';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  steps: Step[];
  constructor(private stepsService: StepsService) {
    this.stepsService.steps$.subscribe((steps) => {
      this.steps = steps;
    });
  }

  ngOnInit() {
  }

}
