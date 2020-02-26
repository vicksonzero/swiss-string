import { AfterContentChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Step } from '../s/Step';
import { StepsService } from '../s/steps.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterContentChecked {

  steps: Step[];

  stepsJSON = '';

  graphWidth = 0;
  graphHeight = 0;
  @ViewChild('graph', { static: false }) graphElement: ElementRef<SVGSVGElement>;
  @ViewChild('front', { static: false }) frontElement: ElementRef<HTMLDivElement>;
  @ViewChild('back', { static: false }) backElement: ElementRef<HTMLDivElement>;
  constructor(private stepsService: StepsService) {
    this.stepsService.steps$.subscribe((steps) => {
      this.steps = steps;
      this.stepsJSON = JSON.stringify(steps, null, 4);
    });
  }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    const viewWidgets = document.querySelectorAll('app-view-widget');
    const operatorWidgets = document.querySelectorAll('app-operator-widget');
    console.log('ngAfterContentChecked', viewWidgets, operatorWidgets);
    if (!this.frontElement) { return; }
    this.graphWidth = this.frontElement.nativeElement.clientWidth;
    this.graphHeight = this.frontElement.nativeElement.clientHeight;
    this.backElement.nativeElement.innerHTML = '';
    const svg = this.createSVG(this.backElement.nativeElement);
    const backBB = this.backElement.nativeElement.getBoundingClientRect();

    // draw lines
    // draw dots 1
    viewWidgets.forEach((viewWidget) => {
      const bb = viewWidget.getBoundingClientRect();
      // const rect = this.createRect(svg);
      // rect.setAttributeNS(null, 'x', '' + (window.scrollX - backBB.left + bb.left));
      // rect.setAttributeNS(null, 'y', '' + (window.scrollY - backBB.top + bb.top));
      // rect.setAttributeNS(null, 'width', '' + (bb.width));
      // rect.setAttributeNS(null, 'height', '' + (bb.height));
      const circleIn = this.createPoint(svg);
      circleIn.setAttributeNS(null, 'fill', '#AA0');
      circleIn.setAttributeNS(null, 'cx', '' + (- backBB.left + (bb.left + bb.right) / 2));
      circleIn.setAttributeNS(null, 'cy', '' + (- backBB.top + bb.top - 4));
      const circleOut = this.createPoint(svg);
      circleOut.setAttributeNS(null, 'cx', '' + (- backBB.left + (bb.left + bb.right) / 2));
      circleOut.setAttributeNS(null, 'cy', '' + (- backBB.top + bb.bottom + 4));
    });

    // draw dots 2
    operatorWidgets.forEach((operatorWidget) => {
      const inputWidgets = operatorWidget.querySelectorAll('.column-input .operator-parameter');
      inputWidgets.forEach((inputWidget) => {
        const bb = inputWidget.getBoundingClientRect();

        const circleIn = this.createPoint(svg);
        circleIn.setAttributeNS(null, 'fill', '#AA0');
        circleIn.setAttributeNS(null, 'cx', '' + (- backBB.left + (bb.left + bb.right) / 2));
        circleIn.setAttributeNS(null, 'cy', '' + (- backBB.top + bb.top - 4));
      });

      const outputWidgets = operatorWidget.querySelectorAll('.column-output .operator-parameter');
      outputWidgets.forEach((outputWidget) => {
        const bb = outputWidget.getBoundingClientRect();
        const circleOut = this.createPoint(svg);
        circleOut.setAttributeNS(null, 'cx', '' + (- backBB.left + (bb.left + bb.right) / 2));
        circleOut.setAttributeNS(null, 'cy', '' + (- backBB.top + bb.bottom + 4));
      });
    });
  }

  onClickAddStep() {
    this.stepsService.addStep();
  }

  trackItem(index: number, item: Step) {
    return item.id;
  }

  createSVG(svgContainer: HTMLDivElement) {

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    svg.setAttributeNS(null, 'id', 'svgDoc');
    svg.setAttributeNS(null, 'width', '' + this.graphWidth);
    svg.setAttributeNS(null, 'height', '' + this.graphHeight);

    // const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    // rect.setAttributeNS(null, 'width', '100%');
    // rect.setAttributeNS(null, 'height', '100%');
    // rect.setAttributeNS(null, 'stroke', '#000');
    // rect.setAttributeNS(null, 'stroke-width', '3');
    // rect.setAttributeNS(null, 'fill', '#AAA');
    // svg.appendChild(rect);

    svgContainer.appendChild(svg);
    return svg;
  }

  createPoint(svg: SVGSVGElement) {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttributeNS(null, 'r', '10');
    circle.setAttributeNS(null, 'stroke', '#DDD');
    circle.setAttributeNS(null, 'stroke-width', '3');
    circle.setAttributeNS(null, 'fill', '#0A0');
    svg.appendChild(circle);

    return circle;
  }

  createRect(svg: SVGSVGElement) {
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttributeNS(null, 'stroke', '#EEE');
    rect.setAttributeNS(null, 'stroke-width', '3');
    rect.setAttributeNS(null, 'fill', '#0A0');
    svg.appendChild(rect);

    return rect;
  }
}
