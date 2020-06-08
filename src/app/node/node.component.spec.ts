import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWidgetComponent } from './node.component';

describe('ViewWidgetComponent', () => {
  let component: ViewWidgetComponent;
  let fixture: ComponentFixture<ViewWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
