import { Component, EventEmitter, Input, Output, HostListener, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight, faMinus, faPlus, faTrashAlt, faArrowUp, faArrowDown, faArrowsAltH, faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight, faAngleDoubleUp, faAngleDoubleDown, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
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
  @Input() stepID: number;
  @Input() index: number;
  @Input() isOrganizeMode: boolean;
  @Input() canArrangeUpStep: boolean;
  @Input() canArrangeDownStep: boolean;

  public faPlus = faPlus;
  public faMinus = faMinus;

  public faArrowsAltH = faArrowsAltH;

  public faAngleLeft = faAngleLeft;
  public faAngleRight = faAngleRight;
  public faAngleUp = faAngleUp;
  public faAngleDown = faAngleDown;

  public faAngleDoubleLeft = faAngleDoubleLeft;
  public faAngleDoubleRight = faAngleDoubleRight;
  public faAngleDoubleUp = faAngleDoubleUp;
  public faAngleDoubleDown = faAngleDoubleDown;

  public faTrashAlt = faTrashAlt;

  @Input() canSizeUp: boolean;
  @Input() canSizeDown: boolean;
  @Input() canArrangeUp: boolean;
  @Input() canArrangeDown: boolean;

  @Output() clickResizeButton: EventEmitter<number> = new EventEmitter();
  @Output() clickArrangeButton: EventEmitter<number> = new EventEmitter();
  @Output() clickArrangeToStepButton: EventEmitter<number> = new EventEmitter();
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

  onClickArrangeToStepButton(delta: number) {
    // moves this column to another step
    this.clickArrangeToStepButton.emit(delta);
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
