import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { shareReplay, startWith } from 'rxjs/operators';
import { Step } from './Step';
import { mockSteps } from './mockSteps';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  steps$: Observable<Step[]>;
  constructor() {
    this.steps$ = new Subject<Step[]>().pipe(
      startWith(mockSteps),
      shareReplay(1),
    );
  }
}
