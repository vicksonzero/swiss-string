import { Component, Input, OnInit, HostListener } from '@angular/core';
import { TABLET_PORTRAIT } from 'src/media';
import { INodeInstance } from '../s/new-model/appDefinitions';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  @Input() stepID: number;
  @Input() nodeIndex: number;
  @Input() nodeInstance: INodeInstance;
  isMobile = false;

  ngOnInit() {
    this.updateDeviceWidth();
  }

  constructor() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateDeviceWidth();
  }
  updateDeviceWidth() {
    const innerWidth = window.innerWidth;

    this.isMobile = (innerWidth < TABLET_PORTRAIT);
  }
}
