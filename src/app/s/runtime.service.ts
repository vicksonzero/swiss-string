import { Injectable } from '@angular/core';
import { StepsService } from './steps.service';

@Injectable({
  providedIn: 'root'
})
export class RuntimeService {
  contexts: {}[];
  constructor(private stepsService: StepsService) {
    this.stepsService.steps$.subscribe((steps) => {
      // console.log(this.stepsService.contexts);
    });
  }

  onClickNext(beforeStepID: number) {

  }
}
