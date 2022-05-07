import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacktrainerComponent } from './feedbacktrainer.component';

describe('FeedbacktrainerComponent', () => {
  let component: FeedbacktrainerComponent;
  let fixture: ComponentFixture<FeedbacktrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbacktrainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbacktrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
