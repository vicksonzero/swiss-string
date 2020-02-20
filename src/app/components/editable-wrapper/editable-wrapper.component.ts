import { AfterContentChecked, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-editable-wrapper',
  templateUrl: './editable-wrapper.component.html',
  styleUrls: ['./editable-wrapper.component.scss']
})
export class EditableWrapperComponent implements OnInit, AfterContentChecked {

  isEdit = false;
  @Input() value = 'hi';

  @ViewChild('editor', { static: false }) editorElement: ElementRef<HTMLInputElement>;
  constructor() {

  }

  ngOnInit() {
  }

  ngAfterContentChecked(): void {
    console.log('hi1');

    if (this.isEdit) {
      console.log('hi2');
    }
  }

  onContentClicked() {
    this.isEdit = true;
    setTimeout(() => {
      this.editorElement.nativeElement.focus();
    }, 100);
  }

  onEditorEnter(){
    this.finalizeInput();
  }

  onEditorBlur() {
    this.finalizeInput();
  }

  finalizeInput(){

    this.value = this.editorElement.nativeElement.value;
    this.isEdit = false;
  }
}
