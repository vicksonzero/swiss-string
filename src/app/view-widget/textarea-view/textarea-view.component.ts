import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-textarea-view',
  templateUrl: './textarea-view.component.html',
  styleUrls: ['./textarea-view.component.scss'],
})
export class TextareaViewComponent implements OnInit {

  @Input() height: number;
  @Input() public content: any;
  @Output() valueChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onContentUpdated(value: string) {
    this.valueChange.emit(value);
  }
}
