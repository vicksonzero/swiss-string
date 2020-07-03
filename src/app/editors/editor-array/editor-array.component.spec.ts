import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorArrayComponent } from './editor-array.component';

describe('EditorListComponent', () => {
  let component: EditorArrayComponent;
  let fixture: ComponentFixture<EditorArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
