import { ChangeDetectorRef, Component, Inject, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { isEqual } from 'lodash-es';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { ToastService } from "@app/shared/toast";
import { Store } from "@ngrx/store";
import { debounceTime, Subject, Subscription, takeUntil } from "rxjs";
import { getRiskMatrixConfiguration } from "../../state/risk-matrix.selectors";
import { formConfigurationStatus } from "@app/app.constants";
import { riskMatrixUpdateDetail } from "../../state/risk-matrix.actions";
import { AlertService } from "../../services/alert.service";


export interface Step {
    title: string;
    content: string;
    columnId?: string;
    isDisabled?: boolean;
  }

  
@Component({
    selector: "app-alerts-edit",
    templateUrl: './alerts-edit-modal.component.html',
    styleUrls: ['./alerts-edit-modal.component.scss']
    })
export class AlertsEditModalComponent implements OnInit {
    
    @ViewChild('previewContainer') previewContainer: TemplateRef<any>;
    steps: Step[] = [
      { title: 'Configure', content: '', isDisabled: false },
      { title: 'Triggers', content: '', isDisabled: true},

    ];

    initialData


    constructor(
        public dialogRef: MatDialogRef<AlertsEditModalComponent>,
        public dialog: MatDialog,
        @Inject(MAT_DIALOG_DATA) public data,
        private router: Router,
        private cdr: ChangeDetectorRef,
        private toast: ToastService,
        private alertService: AlertService,
        private route: ActivatedRoute
      ) {}

    totalSteps: number;
    currentStep = 0;
    formData:any={
      header:{},
      trigger:{}
    }
    authoredFormDetailSubscription: Subscription;
    riskMatrixFormData: any;

    riskMatrixConfig: any;
  
    riskMatrixErrorData: any;
    isLoading = false;
    isNextBtnDisabled = false;



    private unsubscribe$ = new Subject<void>();

  goBack(): void {
    this.router.navigate(['/master-configuration/alerts']);
    this.dialogRef.close({ data: this.riskMatrixFormData, type: 'add' });
  }

  publishedEventHandler(): void {}

  onGotoStep(step): void {
    this.currentStep = step;
    // this.checkStepperStatus();
  }

    ngOnInit(): void {
      this.initialData = this.data.formData;
    }


 


  saveNext() {

    console.log("This form Data",this.formData)
    const queryParams = this.route.snapshot.queryParams;
    console.log(queryParams);



const body={
  _id:this.initialData._id,
  "alertName": this.formData.header?.name,
  description:this.formData.header.description,
  "plant": this.formData.header.plantInfo,
  "location": this.formData.header.location,
  "asset": this.formData.header.asset,
  "status": "active",
  "triggers": [{
    "element": this.formData.trigger.parameter,
    "type": this.formData.trigger.alertTriggerType,
    "value": this.formData.trigger.alertTriggerType ==='1' ? this.formData.trigger.aboveRange : this.formData.trigger.belowRange,
    "unit": this.formData.trigger.units,
    users: this.formData.trigger.userInfo,
    sendTo: this.formData.trigger.sendTo,
    alertType: this.formData.trigger.alertType,
    longerThan: this.formData.trigger.forLongerThan
  }]
}


if(this.initialData._id){
  this.alertService.updateAlert(body).subscribe({
    next: (response) => {
      this.toast.show({
        text: 'Alert updated successfully',
        type: 'success'
      });
      this.dialogRef.close();
      this.router.navigate(['/master-configuration/alerts']);
    },
    error: (error) => {
      this.toast.show({
        text: 'Error updating alert',
        type: 'warning'
      });
    }
  });
  return;
}
// this.currentStep++;



    this.alertService.createAlert(body).subscribe({
      next: (response) => {
        this.toast.show({
          text: 'Alert created successfully',
          type: 'success'
        });
        this.dialogRef.close();
        this.router.navigate(['/master-configuration/alerts']);
      },
      error: (error) => {
        this.toast.show({
          text: 'Error creating alert',
          type: 'warning'
        });
      }
    });
  }
  onRiskMatrixFormErrorEvent(event): void {
    this.riskMatrixErrorData = Object.assign({}, event);
    this.cdr.detectChanges();
  }


  onTriggerDataEvent(event){
      this.formData.trigger = event;
  }

  onHeaderDataEvent(event){
      this.formData.header = event;
  }

  onPrevious() {
    if(this.currentStep === 0)
     {
      this.goBack()
       return;
     } 

    this.currentStep--;
    // this.checkStepperStatus();
  }

  next() {
    this.currentStep++;
    // this.checkStepperStatus();
  }

  
}
