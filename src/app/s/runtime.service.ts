import { Injectable } from '@angular/core';
import { StepsService } from './steps.service';
import { Context } from './Context';
import { WidgetType, ViewWidget, OperatorWidget } from './Step';

@Injectable({
  providedIn: 'root'
})
export class RuntimeService {
  contexts: {}[];
  constructor(private stepsService: StepsService) {
    this.stepsService.steps$.subscribe((steps) => {
    });
  }

  onClickNext(afterStepID: number) {

  }
}
