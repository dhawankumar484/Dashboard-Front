import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnstopAssessmentComponent } from './unstop-assessment.component';

describe('UnstopAssessmentComponent', () => {
  let component: UnstopAssessmentComponent;
  let fixture: ComponentFixture<UnstopAssessmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnstopAssessmentComponent]
    });
    fixture = TestBed.createComponent(UnstopAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
