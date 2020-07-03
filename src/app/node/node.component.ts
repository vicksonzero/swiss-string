import { AfterViewInit, Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';
import { faCaretSquareLeft as faCaretSquareLeftR, faCaretSquareRight as faCaretSquareRightR } from '@fortawesome/free-regular-svg-icons';
import { faBolt, faCaretSquareLeft, faCaretSquareRight, faChevronLeft, faChevronRight, faEdit } from '@fortawesome/free-solid-svg-icons';
import { TABLET_PORTRAIT } from 'src/media';
import { INodeInstance } from '../s/new-model/appDefinitions';
import { operators } from '../s/operators';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit, AfterViewInit {

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
  isEditor = false;
  @ViewChild('cmEditor', { static: false }) nameInputRef: CodemirrorComponent;

  editor: any = {}; // text | textarea | number | list | regex

  operatorList = Object.keys(operators);

  content = '{\n  data:{a:"b"}\n}';

  ngOnInit() {
    this.updateDeviceWidth();
    this.isEditor = this.nodeInstance.nodeType.startsWith('editor');
    if (this.isEditor && this.nodeInstance.editor) { this.editor = this.nodeInstance.editor; }
  }

  ngAfterViewInit() {
    if (this.nameInputRef) { this.nameInputRef.codeMirror.refresh(); }
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
