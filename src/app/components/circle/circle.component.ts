import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {

  @Input() color = '#0A0';
  @Input() borderColor = '#FFF';
  @Input() radius = 5;
  constructor(private elementRef: ElementRef<HTMLDivElement>) {

  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = this.color;
    this.elementRef.nativeElement.style.border = `5px solid ${this.borderColor}`;
    this.elementRef.nativeElement.style.marginLeft = `${-this.radius}`;
    this.elementRef.nativeElement.style.marginTop = `${-this.radius}`;
    this.elementRef.nativeElement.style.width = `${this.radius * 2}px`;
    this.elementRef.nativeElement.style.height = `${this.radius * 2}px`;
  }
}
