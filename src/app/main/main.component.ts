import { Component, OnInit } from '@angular/core';
import { INodeInstance, IStep } from '../s/new-model/appDefinitions';
import { NodeService } from '../s/node.service';
import { Step } from '../s/Step';
import { StepsService } from '../s/steps.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  steps: IStep[];
  nodes: { [x: number]: INodeInstance };
  isValid = false;

  stepsJSON = '';
  constructor(private stepsService: StepsService, private nodeService: NodeService) {
    this.stepsService.steps$.subscribe((steps) => {
      console.log('MainComponent', steps);
      this.steps = steps;
      this.stepsJSON = JSON.stringify(steps, null, 4);
    });

    this.nodeService.nodes$.subscribe((nodes) => {
      this.nodes = nodes;
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
