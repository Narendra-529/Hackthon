import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { BehaviorSubject, map, Observable, Subject } from 'rxjs';

import { Column, ConfigOptions } from '../../interfaces';
import { emissionsColumns } from '../../constants';
import { AlertService } from '../../services/alert.service';
import { AlertsEditModalComponent } from '../alerts-edit/alerts-edit-modal.component';
import { Router } from '@angular/router';
import { PreviewComponent } from '../preview/preview.component';

@Component({
  selector: 'app-emission-alerts',
  templateUrl: './emission-alerts.component.html',
  styleUrl: './emission-alerts.component.scss'
})
export class EmissionAlertsComponent implements OnInit {





  ghostLoading = new Array(10).fill(0).map((v, i) => i);
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(true);



  emissionAlerts$: Observable<any>;
  dataSource: MatTableDataSource<any>;

  emissionAlerts: any[] = [];
  rawData: any[] = [];

  isLoading = false


  configOptions: ConfigOptions = {
    tableID: 'emissionsTable',
    rowsExpandable: false,
    enableRowsSelection: false,
    enablePagination: false,
    displayFilterPanel: false,
    displayActionsColumn: true,
    rowLevelActions: {
      menuActions: []
    },
    groupByColumns: [],
    pageSizeOptions: [10, 25, 50, 75, 100],
    allColumns: [],
    tableHeight: 'calc(100vh - 150px)',
    tableWidth: '100%',
    groupLevelColors: [],
    conditionalStyles: {
      inactive: {
        'background-color': '#FFC107',
        color: '#ffffff',
        'border-radius': '20px',
        padding: '3px 10px 3px 10px',
        'text-transform': 'capitalize'
      },
      active: {
        'background-color': '#2C9E53',
        color: '#ffffff',
        'border-radius': '20px',
        padding: '3px 10px 3px 10px',
        'text-transform': 'capitalize'
      }
    }
  };




  dataSourceOpen: MatTableDataSource<any>;

  constructor(
    private alertService: AlertService,
    private dialog: MatDialog,
    private router: Router

  ) {
  }

  ngOnInit(): void {
    this.prepareMenuActions();

    this.isLoading$.next(true);

    this.emissionAlerts$ =this.alertService.getAlertsList().pipe(
      map((data) => {
        this.rawData = JSON.parse(JSON.stringify(data));

        this.configOptions.allColumns = emissionsColumns;
        for (const row of data) {
          const obj = {
            id: row._id,
            alertName: row.alertName,
            alertSubId: `ID:${(row._id)}`,
            plant: row.plant.plantName,
            plantSubId: `Plant ID:${row.plant.plantId}`,
            assetSubId: `Asset ID:${row.asset.assetId}`,
            locationSubId: `Location ID:${row.location.locationId}`,
            status: row.status,
            createdAt: row.createdAt,
            asset: row.asset.assetName,
            location: row.location.locationName,
            preTextImage:{
              "image": 'assets/master-configurations/emission-alert-icon.svg',
              "style": {
                  "width": "30px",
                  "height": "30px",
                  "marginRight": "10px",
              },
              "condition": true
          }
          }
          this.emissionAlerts.push(obj);
         
        }
        this.dataSource = new MatTableDataSource(this.emissionAlerts);
        this.configOptions = {
          ...this.configOptions,
          tableHeight: 'calc(100vh - 150px)'
        };
        this.isLoading$.next(false);
        this.isLoading = true
      return data;
      })
    );


  //  this.alertService.getAlertsList().subscribe({
  //     next: (data) => {

  //       console.log('data', data);

  //       this.configOptions.allColumns = emissionsColumns;
  //       for (const row of data) {
  //         const obj = {
  //           id: row._id,
  //           alertName: row.alertName,
  //           plant: row.plant.plantName,
  //           status: row.status,
  //           createdAt: row.createdAt,
  //           asset: row.asset.assetName,
  //           location: row.location.locationName,
  //           image:'assets/master-configurations/emission-alert-icon.svg'
  //         }
  //         this.emissionAlerts.push(obj);
  //         this.dataSource = new MatTableDataSource(this.emissionAlerts);
  //         this.configOptions = {
  //           ...this.configOptions,
  //           tableHeight: 'calc(100vh - 150px)'
  //         };
  //         this.isLoading$.next(false);
  //         this.isLoading = true
        
  //       }


  //       // this.dataSource = new MatTableDataSource(data);
  //     },
  //     error: (error) => {
  //       console.error('Error fetching emissions alerts', error);
  //     }
  //   }
  //   );
  }

  openRowLevelActionHandler = ({ data, action }): void => {
    switch (action) {
      case 'edit':
      this.editHandler(data);
        break;
      case 'preview':
        this.previewHandler(data);
        break;
      case 'copy':
        break;
      case 'archive':
        break;
      default:
    }
  };



  prepareMenuActions = () => {
    const menuActions = [];
      menuActions.push(
        {
          title: 'Edit',
          action: 'edit'
        },
        { title: 'preview', action: 'preview' },

      );

      this.configOptions.rowLevelActions.menuActions = menuActions;
      this.configOptions.displayActionsColumn = menuActions.length
        ? true
        : false;
      this.configOptions = {
        ...this.configOptions,
        tableHeight: 'calc(100vh - 150px)'
      };
   
      // this.configOptionsArchive.rowLevelActions.menuActions = menuActions;
      // this.configOptionsArchive.displayActionsColumn = menuActions.length
      //   ? true
      //   : false;
      // this.configOptionsArchive = {
      //   ...this.configOptionsArchive,
      //   tableHeight: 'calc(100vh - 150px)'
      // };
    
  };

 returnById = (id: string): any => {
    return this.rawData.find((alert) => alert._id === id);
  }


  editHandler(data) {
    this.router.navigate(['/master-configuration/alerts/edit', data.id], {
      state: { formData: this.returnById(data.id) }
    });
    // this.dialog.open(AlertsEditModalComponent, {
    //   maxWidth: '100vw',
    //   maxHeight: '100vh',
    //   height: '100%',
    //   width: '100%',
    //   panelClass: 'full-screen-modal',
    //   disableClose: true,
    //   data: {
    //     formData: this.returnById(data.id),
    //     type: 'edit'
    //   }
    // });
  }


  previewHandler(data) {
    this.dialog.open(PreviewComponent, {
      panelClass:'preview-dialog',
      disableClose: false,
      width: '600px',
      height: '400px',
      data: {
        formData: this.returnById(data.id),
        type: 'preview'
      }
    });
  }

}
