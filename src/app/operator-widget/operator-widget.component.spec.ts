import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorWidgetComponent } from './operator-widget.component';

describe('OperatorWidgetComponent', () => {
  let component: OperatorWidgetComponent;
  let fixture: ComponentFixture<OperatorWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
