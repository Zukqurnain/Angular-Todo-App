import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidComponent } from './form-valid.component';

describe('FormValidComponent', () => {
  let component: FormValidComponent;
  let fixture: ComponentFixture<FormValidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
