import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editor-array',
  templateUrl: './editor-array.component.html',
  styleUrls: ['./editor-array.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorArrayComponent implements OnInit {

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
    if (this.options.minItems != null || this.options.maxItems != null) {
      this.items = (this.contentValue || []).slice(this.options.minItems, this.options.maxItems);
      if (this.items.length < this.options.maxItems) {
        this.items.length = this.options.maxItems;
      }
    } else {
      this.items = this.contentValue || [''];
    }
  }

}
