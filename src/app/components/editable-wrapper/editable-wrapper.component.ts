import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-editable-wrapper',
  templateUrl: './editable-wrapper.component.html',
  styleUrls: ['./editable-wrapper.component.scss']
})
export class EditableWrapperComponent implements OnInit {

  public faEdit = faEdit;

  isEdit = false;
  isLabelOver = false;
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();

  @ViewChild('editor', { static: false }) editorElement: ElementRef<HTMLInputElement>;
  constructor() {

  }

  ngOnInit() {
  }

  onContentClicked() {
    this.isEdit = true;
    this.isLabelOver = false;
    setTimeout(() => {
      this.editorElement.nativeElement.focus();
    }, 100);
  }

  onMouseEnterLabel() {
    this.isLabelOver = true;
  }
  onMouseLeaveLabel() {
    this.isLabelOver = false;
  }

  onEditorEnter() {
    this.finalizeInput();
  }

  onEditorBlur() {
    this.finalizeInput();
  }

  finalizeInput() {

    this.value = this.editorElement.nativeElement.value;
    this.isEdit = false;
    this.valueChange.emit(this.value);
  }
}
