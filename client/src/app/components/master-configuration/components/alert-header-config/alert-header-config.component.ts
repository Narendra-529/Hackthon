import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, Subject, take, takeUntil } from 'rxjs';
import { getFormErrors } from '../../utils';
import { Store } from '@ngrx/store';
import { updateMatrixHeaderForm } from '../../state/risk-matrix.actions';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-alert-header-config',
  templateUrl: './alert-header-config.component.html',
  styleUrl: './alert-header-config.component.scss'
})
export class AlertHeaderConfigComponent implements OnInit {

  @Output() riskMatrixFormErrorEvent = new EventEmitter<any>();
  @Output() headerData = new EventEmitter<any>();

  @Input() set initialData(data: any) {
    if (data) {
      this.riskMatrixHeaderForm.patchValue({
        name: data.alertName,
        description: data.description,
        plantInfo: data.plant,
        location: data.location,
        asset: data.asset
      });
      this.riskMatrixHeaderForm.get('location').enable();
      this.riskMatrixHeaderForm.get('asset').enable();
      this.riskMatrixFormErrorEvent.emit({
        status: 'VALID',
        message: `Form is valid`
      });
    }
  }

  @Input() set formStatus(status: string) {
    
  }


  unsubscribe$ = new Subject<void>();

  plants = [
    // this is just a dummy data will be fetched from the server later
    {
      plantId: 'ONGC-146',
      plantName: 'ONGC'
    },
    {
      plantId: 'RI-81',
      plantName: 'Reliance Industries'
    },
    {
      plantId: 'LT-71',
      plantName: 'Larsen & Toubro'
    }
  ];



  locations = [
  {
    "locationName": "Nazira-Rig1",
    "locationId": "146R-1"
  },
  {
    "locationName": "Nazira-Rig2",
    "locationId": "146R-2"
  },
  {
    "locationName": "Meshana-Rig1",
    "locationId": "044R-1"
  },
  {
    "locationName": "Meshana-Rig2",
    "locationId": "044R-2"
  },
  {
    "locationName": "Uran-Rig1",
    "locationId": "246R-2"
  }
]



  assets = [
    // this is just a dummy data will be fetched from the server later
    {
      assetId: '146R-1-GT004',
      assetName: 'Gas Turbine-4'
    },
    {
      assetId: '146R-1-GT007',
      assetName: 'Gas Turbine-7'
    },
    {
      assetId: '146R-2-IN018',
      assetName: 'Incinerator-18'
    },
    {
      assetId: '044R-1-IN07',
      assetName: 'Incinerator-7'
    },
    {
      assetId: '044R-2-IN131',
      assetName: 'Incinerator-131'
    }
  ];

  onPlantSelectChange(plant: any) {
    this.riskMatrixHeaderForm.get('plantInfo').setValue(plant);
  }

  onLocationSelectChange(plant: any) {
    this.riskMatrixHeaderForm.get('location').setValue(plant);
  }

  onAssetSelectChange(plant: any) {
    this.riskMatrixHeaderForm.get('asset').setValue(plant);
  }
  comparePlants(plant1: any, plant2: any): boolean {
    return plant1 && plant2 && plant1.plantId === plant2.plantId;
  }


compareLocations(plant1: any, plant2: any): boolean {
  return plant1 && plant2 && plant1.locationId === plant2.locationId;
}

compareAssets(plant1: any, plant2: any): boolean {
  return plant1 && plant2 && plant1.assetId === plant2.assetId;
}

  riskMatrixHeaderForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    description: ['',Validators.required],
    plantInfo: [
      null,
      [Validators.required]
    ],
    location: [null, [Validators.required],],
    asset: [null, [Validators.required]],
  });


  constructor(private fb: FormBuilder,
    private store: Store<any>,
    private alertService: AlertService
  ) {
    this.riskMatrixHeaderForm.get('location').disable();
    this.riskMatrixHeaderForm.get('asset').disable();
    const headerFormErrors = getFormErrors(this.riskMatrixHeaderForm);
    

    this.emitErrorEvent(headerFormErrors);
  }

  ngOnInit(): void {

    this.alertService.Changeddata.pipe(take(1)).subscribe((data) => {
     
     this.riskMatrixHeaderForm.patchValue(data.header);
     this.riskMatrixHeaderForm.get('location').enable();
      this.riskMatrixHeaderForm.get('asset').enable();
    }
  );

    // this.riskMatrixFormErrorEvent.emit({
    //   status: 'INVALID',
    //   message: `Please fill all the required fields`
    // });
    const headerFormErrors = getFormErrors(this.riskMatrixHeaderForm);
    

    this.emitErrorEvent(headerFormErrors);
    this.riskMatrixHeaderForm.valueChanges
    .pipe(takeUntil(this.unsubscribe$), debounceTime(400))
    .subscribe((headerFormData) => {
      if(this.riskMatrixHeaderForm.get('plantInfo').value) {
        this.riskMatrixHeaderForm.get('location').enable();
        this.riskMatrixHeaderForm.get('asset').enable();
      }
      const headerFormErrors = getFormErrors(this.riskMatrixHeaderForm);
    

      this.emitErrorEvent(headerFormErrors);
      this.headerData.emit(headerFormData);
    });
  }

  emitErrorEvent(formErrors): void {
    if (Object.keys(formErrors).length > 0) {
      this.riskMatrixFormErrorEvent.emit({
        status: 'INVALID',
        message: `Please fill all the required fields`
      });
    } else {
      this.riskMatrixFormErrorEvent.emit({
        status: 'VALID',
        message: `Form is valid`
      });
    }
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
