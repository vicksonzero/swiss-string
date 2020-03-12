import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { faMinus, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { merge, Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { RuntimeService } from '../s/runtime.service';
import { ViewWidget } from '../s/Step';
import { StepsService } from '../s/steps.service';

@Component({
  selector: 'app-view-widget',
  templateUrl: './view-widget.component.html',
  styleUrls: ['./view-widget.component.scss']
})
export class ViewWidgetComponent implements OnInit {

  public faPlus = faPlus;
  public faMinus = faMinus;
  public faTrashAlt = faTrashAlt;

  @Input() stepID: number;
  @Input() viewWidget: ViewWidget;
  @Input() index: number;
  @Input() isOrganizeMode = false;

  content: any;

  height = 300;

  entityRuntimeData$: Observable<any>;

  constructor(private stepsService: StepsService, private runtimeService: RuntimeService, private elementRef: ElementRef<HTMLDivElement>) {
  }

  ngOnInit() {
    merge(
      this.runtimeService.entitiesChanged$.pipe(
        // tap((a) => console.log('entityRuntimeData', [...a], this.viewWidget.id)),
        filter((changedIndexes) => changedIndexes.some(index => index === this.viewWidget.id)),
      ),
      this.stepsService.steps$.pipe(take(1)),
    ).subscribe(() => {
      // console.log('entityRuntimeData', this.viewWidget.id)),
      this.content = this.runtimeService.entities[this.viewWidget.id].content;
    });
  }

  onTitleUpdated(value: string) {
    this.viewWidget.view.title = value;
    this.stepsService.updateWidget(this.stepID, this.index, this.viewWidget);
  }

  onContentUpdated({ target }: Event) {
    this.runtimeService.updateContent(this.viewWidget.id, (target as HTMLTextAreaElement).value);
  }

  elGetBoundingClientRect() {
    return this.elementRef.nativeElement.getBoundingClientRect();
  }

  onClickResizeButton(delta: number) {
    if (delta < 0) { this.height = Math.max(100, this.height - 100); }
    if (delta > 0) { this.height += 100; }
  }

  onClickTrash() {
    console.log('onClickTrash stub');
  }
}
