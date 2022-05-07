import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursefeedbackviewComponent } from './coursefeedbackview.component';

describe('CoursefeedbackviewComponent', () => {
  let component: CoursefeedbackviewComponent;
  let fixture: ComponentFixture<CoursefeedbackviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursefeedbackviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursefeedbackviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
