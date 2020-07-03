import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editor-vector',
  templateUrl: './editor-vector.component.html',
  styleUrls: ['./editor-vector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorVectorComponent implements OnInit {

  contentValue: any;

  items: Array<any>;

  @Input()
  options: any;

  @Input()
  get content() {
    return this.contentValue;
  }
  @Output() contentChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (this.options.length != null) {
      this.items = (this.contentValue || []).slice(0, this.options.length);
      if (this.items.length < this.options.length) {
        this.items.length = this.options.length;
      }
    } else {
      this.items = this.contentValue || new Array(this.options.length).fill(0);
    }
  }

}
