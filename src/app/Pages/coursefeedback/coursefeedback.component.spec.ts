import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursefeedbackComponent } from './coursefeedback.component';

describe('CoursefeedbackComponent', () => {
  let component: CoursefeedbackComponent;
  let fixture: ComponentFixture<CoursefeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursefeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursefeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
