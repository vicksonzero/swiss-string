import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-json-view',
  templateUrl: './json-view.component.html',
  styleUrls: ['./json-view.component.scss']
})
export class JsonViewComponent implements OnInit, OnChanges {

  @Input() height: number;
  @Input() public content: any;

  public jsonString: string;
  public err: string;
  @Output() valueChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const changeInContent = changes.content;
    this.jsonString = JSON.stringify(changeInContent.currentValue, null, 4);
  }

  onContentUpdated(value: string) {
    try {
      const obj = JSON.parse(value);
      this.valueChange.emit(obj);
    } catch (e) {
      this.err = e.toString();
    }
  }
}
