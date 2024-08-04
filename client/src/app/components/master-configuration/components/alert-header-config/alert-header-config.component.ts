import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { getFormErrors } from '../../utils';
import { Store } from '@ngrx/store';
import { updateMatrixHeaderForm } from '../../state/risk-matrix.actions';

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

  unsubscribe$ = new Subject<void>();

  plants = [
    // this is just a dummy data will be fetched from the server later
    {
      plantId: '1231asd1',
      plantName: 'Plant 1'
    },
    {
      plantId: 'sdfsdfsasd2',
      plantName: 'Plant 2'
    },
    {
      plantId: '12sdfdfsdfsf3',
      plantName: 'Plant 3'
    }
  ];


  locations = [
    // this is just a dummy data will be fetched from the server later
    {
      locationId: '1231asd1',
      locationName: 'Plant 1'
    },
    {
      locationId: 'sdfsdfsasd2',
      locationName: 'Plant 2'
    },
    {
      locationId: '12sdfdfsdfsf3',
      locationName: 'Plant 3'
    }
  ];

  assets = [
    // this is just a dummy data will be fetched from the server later
    {
      assetId: '1231asd1',
      assetName: 'Plant 1'
    },
    {
      assetId: 'sdfsdfsasd2',
      assetName: 'Plant 2'
    },
    {
      assetId: '12sdfdfsdfsf3',
      assetName: 'Plant 3'
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
    private store: Store<any>
  ) {
    this.riskMatrixHeaderForm.get('location').disable();
    this.riskMatrixHeaderForm.get('asset').disable();
    const headerFormErrors = getFormErrors(this.riskMatrixHeaderForm);
    

    this.emitErrorEvent(headerFormErrors);
  }

  ngOnInit(): void {
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
