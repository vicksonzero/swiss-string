import {
  Directive, ElementRef, AfterViewChecked,
  Input, HostListener
} from '@angular/core';

@Directive({
  selector: '[appMatchHeight]'
})
export class MatchHeightDirective implements AfterViewChecked {

  // class name to match height
  @Input() appMatchHeight: string;

  constructor(private el: ElementRef) {
  }

  ngAfterViewChecked() {
    const meaningfulClassNames = (this.appMatchHeight.split(' ')
      .filter(className => !!className)
      // .map(this.substituteForWildCards)
    );
    // call our matchHeight function here later
    this.matchHeights(this.el.nativeElement, meaningfulClassNames);
  }

  @HostListener('window:resize')
  onResize() {
    const meaningfulClassNames = (this.appMatchHeight.split(' ')
      .filter(className => !!className)
      .map(this.substituteForWildCards)
    );
    // call our matchHeight function here later
    this.matchHeights(this.el.nativeElement, meaningfulClassNames);
  }

  matchHeights(parent: HTMLElement, classNames: string[]) {
    classNames.forEach((name) => {
      this.matchHeight(parent, name);
    });
  }
  matchHeight(parent: HTMLElement, className: string) {
    // match height logic here

    if (!parent) return;

    const children = parent.getElementsByClassName(className);
    if (!children) return;

    // reset all children height
    Array.from(children).forEach((x: HTMLElement) => {
      x.style.height = 'initial';
    })

    // gather all height
    const itemHeights = Array.from(children)
      .map(x => x.getBoundingClientRect().height);

    // find max height
    const maxHeight = itemHeights.reduce((prev, curr) => {
      return (curr > prev) ? curr : prev;
    }, 0);

    // apply max height
    Array.from(children)
      .forEach((x: HTMLElement) => x.style.height = `${maxHeight}px`);
  }

  substituteForWildCards(className: string) {
    return (className === '*' ? '' : className);
  }
}