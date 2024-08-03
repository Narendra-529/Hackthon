import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Observable } from 'rxjs';

import { Column, ConfigOptions } from '../../interfaces';
import { emissionsColumns } from '../../constants';

@Component({
  selector: 'app-emission-alerts',
  templateUrl: './emission-alerts.component.html',
  styleUrl: './emission-alerts.component.scss'
})
export class EmissionAlertsComponent implements OnInit {



  ghostLoading = new Array(10).fill(0).map((v, i) => i);
  isLoading$:Observable<boolean>;


  emissionAlerts$: Observable<any>;
  dataSource: MatTableDataSource<any>;



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
      inActive: {
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



  ngOnInit(): void {
    
  }

  openRowLevelActionHandler = ({ data, action }): void => {
    switch (action) {
      case 'edit':

        break;
      case 'preview':
        break;
      case 'copy':
        break;
      case 'archive':
        break;
      default:
    }
  };

}
