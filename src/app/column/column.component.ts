import { Component, EventEmitter, Input, Output, HostListener, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight, faMinus, faPlus, faTrashAlt, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { INodeInstance } from '../s/new-model/appDefinitions';
import { TABLET_PORTRAIT } from 'src/media';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  isMobile = false;
  @Input() nodeInstance: INodeInstance;
  @Input() index: number;
  @Input() isOrganizeMode: boolean;
  public faPlus = faPlus;
  public faMinus = faMinus;
  public faTrashAlt = faTrashAlt;
  public faArrowLeft = faArrowLeft;
  public faArrowRight = faArrowRight;
  public faArrowUp = faArrowUp;
  public faArrowDown = faArrowDown;

  @Input() canSizeUp: boolean;
  @Input() canSizeDown: boolean;
  @Input() canArrangeUp: boolean;
  @Input() canArrangeDown: boolean;

  @Output() clickResizeButton: EventEmitter<number> = new EventEmitter();
  @Output() clickArrangeButton: EventEmitter<number> = new EventEmitter();
  @Output() clickTrash: EventEmitter<void> = new EventEmitter();
  @Output() requestMoveToStep: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.updateDeviceWidth();
  }

  onClickResizeButton(delta: number) {
    this.clickResizeButton.emit(delta * 100);
  }

  onClickArrangeButton(delta: number) {
    this.clickArrangeButton.emit(delta);
  }

  onClickTrash() {
    this.clickTrash.emit();
  }

  onRequestMoveToStep(newStepID: number) {
    this.requestMoveToStep.emit(newStepID);
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
