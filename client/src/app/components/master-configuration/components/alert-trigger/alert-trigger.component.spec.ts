import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertTriggerComponent } from './alert-trigger.component';

describe('AlertTriggerComponent', () => {
  let component: AlertTriggerComponent;
  let fixture: ComponentFixture<AlertTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertTriggerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
