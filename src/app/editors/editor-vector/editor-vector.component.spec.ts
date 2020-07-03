import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorVectorComponent } from './editor-vector.component';

describe('EditorVectorComponent', () => {
  let component: EditorVectorComponent;
  let fixture: ComponentFixture<EditorVectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorVectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorVectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
