import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

import {MatDialog} from '@angular/material/dialog';
import { timeFilter } from "../../constants";
import { MatrixStatus } from "../../interfaces";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertsEditModalComponent } from "../alerts-edit/alerts-edit-modal.component";
import { AlertService } from "../../services/alert.service";



@Component({
    selector: "app-alerts",
    templateUrl: "./alerts.component.html",
    styleUrls: ["./alerts.component.scss"],
    })
export class AlertsComponent implements OnInit {

  @ViewChild('filterIconBtn') filterIconBtn: ElementRef;
  @ViewChild('filterContent') filterContent: TemplateRef<any>;


  tabIndex: number;


  isShowSearchCloseIcon = false;
  filterIconrefvariable;
  searchValue = '';
  filterFormListView:FormGroup = this.fb.group({
    lastModifiedOn: new FormControl(''),
    lastModifiedBy: new FormControl(''),
    productsList: new FormControl([])
  });
  
  constructor(private dialog:MatDialog,
    private fb: FormBuilder,
    private router: Router,
    private alertService: AlertService,
  ) {
  
  }



  timeFilter: MatrixStatus[] = timeFilter;


  ngOnInit(): void {
    this.tabIndex = 0
    // this.onClickCreateNew()
    
  }




    getSelectedIndex(): number {
        return this.tabIndex;
      }
      
      onTabChange(event: MatTabChangeEvent) {
        this.tabIndex = event.index;
      }
      


      onChangeSearchValue = (event) => {
        const filterValue = event.target.value.toLowerCase();
        this.searchValue = event.target.value;
        this.isShowSearchCloseIcon = event.target.value.length !== 0;
    
        // if (!filterValue.trim()) {
        //   this.languagesDataSource = new MatTableDataSource(this.rawLanguagesData);
        // } else {
        //   const searchWords = filterValue
        //     .split(' ')
        //     .filter((word) => word.trim() !== '');
        //   const searchArray = this.rawLanguagesData;
    
        //   const filteredDataOnSearch = searchArray.filter((eachOption) =>
        //     searchWords.some(
        //       (word) =>
        //         eachOption.languageName?.toLowerCase().includes(word) ||
        //         eachOption.product?.toLowerCase().includes(word) ||
        //         eachOption.productType?.toLowerCase().includes(word) ||
        //         eachOption.lastModifiedBy?.toLowerCase().includes(word) ||
        //         eachOption.lastModifiedOn?.toLowerCase().includes(word) ||
        //         eachOption.stringsTranslated?.toLowerCase().includes(word)
        //     )
        //   );
    
        //   this.languagesDataSource = new MatTableDataSource(filteredDataOnSearch);
        // }
    
        // this.languageConfigOptions = {
        //   ...this.languageConfigOptions,
        //   tableHeight: 'calc(100vh - 150px)'
        // };
    
        // this.countLanguages = this.countNumberOfLanguages();
    
        // this.cdr.detectChanges();
      };
     

      onClickFilterIcon = () => {
        const buttonPosition =
          this.filterIconBtn.nativeElement.getBoundingClientRect();
        this.filterIconrefvariable = this.dialog.open(this.filterContent, {
          width: '356px',
          position: {
            top: `${buttonPosition.top + 40}px`,
            left: `${buttonPosition.left - 230}px`
          },
          autoFocus: false,
          backdropClass: 'number-back-drop',
          panelClass: 'number-panel',
          hasBackdrop: true
        });
      };

      onSearchClose = () => {
        this.searchValue = '';
        this.onChangeSearchValue({ target: { value: '' } });
      };
    
      onClickFilterClose = () => {
        this.dialog.closeAll();
      };

      onClickFilterReset = () => {
        this.filterFormListView.get('lastModifiedOn').setValue('');
        this.filterFormListView.get('lastModifiedBy').setValue('');
      };
    
      onClickFilterApply() {
        const lastModifiedOnValues = this.filterFormListView.get('lastModifiedOn').value;
        const lastModifiedByValues = this.filterFormListView.get('lastModifiedBy').value 
        const productValues = this.filterFormListView.get('productsList').value;
    
        // const validTableData = this.filterData.filter((product) => {
        //   const { lastModifiedOn } = product;
    
        //   return lastModifiedOn && !isNaN(Date.parse(lastModifiedOn));
        // });
    
        // const filteredTableData = validTableData.filter((product) => {
        //   const { lastModifiedOn, lastModifiedBy, product: productName } = product;
        //   const lastModifiedOnTimeStamp = new Date(lastModifiedOn).getTime();
    
        //   const isLastModifiedByMatch =
        //     lastModifiedByValues.length === 0 ||
        //     lastModifiedByValues.includes(lastModifiedBy);
    
        //   return (
        //     (lastModifiedOnValues.length === 0 ||
        //       checkTimeStampInRange(
        //         lastModifiedOnTimeStamp,
        //         lastModifiedOnValues
        //       )) &&
        //     isLastModifiedByMatch &&
        //     (productValues.length === 0 || productValues.includes(productName))
        //   );
        // });
    
        // this.languagesDataSource = new MatTableDataSource(filteredTableData);
    
        // this.languageConfigOptions = {
        //   ...this.languageConfigOptions,
        //   tableHeight: 'calc(100vh - 150px)'
        // };
    
        // this.cdr.detectChanges();
        // this.filterIconrefvariable.close();
      }


      onClickCreateNew = () => {
        this.tabIndex = -1
        const ref = this.dialog.open(AlertsEditModalComponent, {
          maxWidth: '100vw',
          maxHeight: '100vh',
          height: '100%',
          width: '100%',
          panelClass: 'full-screen-modal',
          disableClose: true,
          data: {
            formData: null,
            type: 'create'
          }
        });

        ref.afterClosed().subscribe((result) => {
         this.tabIndex = 0
        });

      }




}

