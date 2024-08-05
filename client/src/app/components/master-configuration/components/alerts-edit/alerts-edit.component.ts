import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AlertsEditModalComponent } from './alerts-edit-modal.component';

@Component({
  selector: 'app-alerts-edit',
  template: '',
})
export class AlertsEditComponent {

  riskMatrixData: any;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    // private store: Store<any>
  ) {}

  ngOnInit(): void {

    this.route.data.subscribe((data) => {
      if (data['form'] && Object.keys(data['form']).length) {
        this.riskMatrixData = data['form'];
      }
    });
    // this.route.data.subscribe((data) => {
    //   if (data['form'] && Object.keys(data['form']).length) {
    //     this.riskMatrixData = data['form'];
    //     this.store.dispatch(
    //       riskMatrixUpdateInitialState({
    //         riskMatrixConfiguration: this.riskMatrixData
    //       })
    //     );
    //   }
    // });
    this.dialog.open(AlertsEditModalComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal',
      disableClose: true,
      data: {
        formData: this.riskMatrixData,
        type: 'edit'
      }
    });
  }
}
