import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionGroupComponent } from './transition-group.component';

describe('ViewWidgetComponent', () => {
  let component: TransitionGroupComponent;
  let fixture: ComponentFixture<TransitionGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitionGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
