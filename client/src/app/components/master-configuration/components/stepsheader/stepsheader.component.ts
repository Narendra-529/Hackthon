import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Step } from '../alerts-edit/alerts-edit-modal.component';

@Component({
  selector: 'app-stepsheader',
  templateUrl: './stepsheader.component.html',
  styleUrls: ['./stepsheader.component.scss']
})
export class StepsheaderComponent implements OnInit {
  @Input() steps: Step[];
  @Input() moduleName: string;
  @Input() currentStep = 0;
  @Input() showGoBack?: boolean;
  @Output() gotoStep = new EventEmitter<number>();
  @Output() goBack = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  onGotoStep(step): void {
    this.gotoStep.emit(step);
  }

  onGoBack(step): void {
    this.goBack.emit(step);
  }
}
