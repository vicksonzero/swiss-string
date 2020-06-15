import { Component, Input, OnInit, HostListener } from '@angular/core';
import { TABLET_PORTRAIT } from 'src/media';
import { INodeInstance } from '../s/new-model/appDefinitions';
import { operators } from '../s/operators';
import { faBolt, faEdit, faCaretSquareLeft, faCaretSquareRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faCaretSquareLeft as faCaretSquareLeftR, faCaretSquareRight as faCaretSquareRightR } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  public faBolt = faBolt;
  public faEdit = faEdit;
  public faChevronLeft = faChevronLeft;
  public faChevronRight = faChevronRight;

  public faCaretSquareLeft = faCaretSquareLeft;
  public faCaretSquareRight = faCaretSquareRight;
  public faCaretSquareLeftR = faCaretSquareLeftR;
  public faCaretSquareRightR = faCaretSquareRightR;

  @Input() stepID: number;
  @Input() nodeIndex: number;
  @Input() nodeInstance: INodeInstance;
  isMobile = false;

  operatorList = Object.keys(operators);

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
