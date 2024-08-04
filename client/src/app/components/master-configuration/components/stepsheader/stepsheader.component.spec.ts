import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsheaderComponent } from './stepsheader.component';

describe('StepsheaderComponent', () => {
  let component: StepsheaderComponent;
  let fixture: ComponentFixture<StepsheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
