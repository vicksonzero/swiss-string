import { Injectable } from '@angular/core';
import { StepsService } from './steps.service';
import { Context } from './Context';

@Injectable({
  providedIn: 'root'
})
export class RuntimeService {

  contexts: Context[];

  constructor(private stepsService: StepsService) {
    this.stepsService.steps$.subscribe();
  }
}
