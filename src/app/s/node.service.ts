import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { INodeInstance, IStep } from './new-model/appDefinitions';
import { mockSteps } from './mockSteps';
import { shareReplay, } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NodeService {
  nodes$: Observable<INodeInstance[]>;


  nodesSource = new BehaviorSubject<INodeInstance[]>(mockSteps.nodes);

  nodeCounter = mockSteps.nodeCounter;
  constructor() {
    this.nodes$ = from(this.nodesSource).pipe(
      shareReplay(1),
    );
  }

  createNode() {
    const old = this.nodesSource.getValue();
    const insertValue: INodeInstance = {
      nodeID: this.nodeCounter,
      title: 'Node',
      nodeType: '',
      inputs: [],
      outputs: [],
    };

    this.nodeCounter++;
    this.nodesSource.next([...old, insertValue]);
    return insertValue;
  }

}


