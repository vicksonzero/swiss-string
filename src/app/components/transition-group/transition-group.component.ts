import { ElementRef, Component, AfterViewInit, Input, ContentChildren, QueryList, HostListener } from '@angular/core';
import { TransitionGroupItemDirective } from './transition-group-item.directive';



@Component({
  selector: 'app-transition-group',
  templateUrl: './transition-group.component.html',
})
export class TransitionGroupComponent implements AfterViewInit {
  @Input() className: string;

  forceReflow: any;

  @ContentChildren(TransitionGroupItemDirective) items: QueryList<TransitionGroupItemDirective>;

  constructor(private el: ElementRef) { }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');

    setTimeout(() => this.refreshPosition('prevPos'), 0); // save init positions on next 'tick'

    this.items.changes.subscribe((items: TransitionGroupItemDirective[]) => {
      console.log('TransitionGroupComponent items.changes', items);

      items.forEach((item) => item.prevPos = item.newPos || item.prevPos);
      items.forEach(this.runCallback);
      this.refreshPosition('newPos');
      items.forEach((item) => item.prevPos = item.prevPos || item.newPos); // for new items

      const animate = () => {
        items.forEach(this.applyTranslation);
        this.forceReflow = document.body.offsetHeight; // force reflow to put everything in position
        this.items.forEach(this.runTransition.bind(this));
      };

      const willMoveSome = items.some((item) => {
        const dx = item.prevPos.left - item.newPos.left;
        const dy = item.prevPos.top - item.newPos.top;
        return dx !== 0 || dy !== 0;
      });

      if (willMoveSome) {
        animate();
      } else {
        setTimeout(() => { // for removed items
          this.refreshPosition('newPos');
          animate();
        }, 0);
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    setTimeout(() => this.refreshPosition('newPos'), 0); // save init positions on next 'tick'
    setTimeout(() => this.refreshPosition('prevPos'), 0); // save init positions on next 'tick'
  }

  @HostListener('scroll', ['$event']) // for scroll events of the current element
  onScroll(event: Event) {
    setTimeout(() => this.refreshPosition('newPos'), 0); // save init positions on next 'tick'
    setTimeout(() => this.refreshPosition('prevPos'), 0); // save init positions on next 'tick'
  }

  runCallback(item: TransitionGroupItemDirective) {
    if (item.moveCallback) {
      item.moveCallback();
    }
  }

  runTransition(item: TransitionGroupItemDirective) {
    if (!item.moved) {
      return;
    }
    const cssClass = this.className + '-move';
    const el = item.el;
    const style: any = el.style;
    el.classList.add(cssClass);
    style.transform = style.WebkitTransform = style.transitionDuration = '';
    el.addEventListener('transition' + 'end', item.moveCallback = (e: any) => {
      if (!e || /transform$/.test(e.propertyName)) {
        el.removeEventListener('transition' + 'end', item.moveCallback);
        item.moveCallback = null;
        el.classList.remove(cssClass);
      }
    });
  }

  refreshPosition(prop: 'prevPos' | 'newPos') {
    // console.log('refreshPosition ', prop);

    this.items.forEach((item) => {
      const parentPos = this.el.nativeElement.getBoundingClientRect() as DOMRect;
      const childPos = item.el.getBoundingClientRect() as DOMRect;
      const a = {
        top: childPos.top - parentPos.top,
        right: childPos.right - parentPos.right,
        bottom: childPos.bottom - parentPos.bottom,
        left: childPos.left - parentPos.left,
      } as DOMRect;
      item[prop] = new DOMRect(
        a.left,
        a.top,
        a.right - a.left,
        a.bottom - a.top,
      );
    });
  }

  applyTranslation(item: TransitionGroupItemDirective) {
    item.moved = false;
    const dx = item.prevPos.left - item.newPos.left;
    const dy = item.prevPos.top - item.newPos.top;
    if (dx || dy) {
      item.moved = true;
      const style: any = item.el.style;
      style.transform = style.WebkitTransform = 'translate(' + dx + 'px,' + dy + 'px)';
      style.transitionDuration = '0s';
    }
  }
}
