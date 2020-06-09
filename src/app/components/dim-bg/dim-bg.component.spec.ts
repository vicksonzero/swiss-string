import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DimBgComponent } from './dim-bg.component';

describe('DimBgComponent', () => {
  let component: DimBgComponent;
  let fixture: ComponentFixture<DimBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DimBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DimBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
