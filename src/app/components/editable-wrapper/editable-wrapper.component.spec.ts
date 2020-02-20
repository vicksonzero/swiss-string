import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableWrapperComponent } from './editable-wrapper.component';

describe('EditableWrapperComponent', () => {
  let component: EditableWrapperComponent;
  let fixture: ComponentFixture<EditableWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
