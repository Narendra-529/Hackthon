import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { CdkScrollableModule, ScrollingModule } from '@angular/cdk/scrolling';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DynamictableModule } from '@innovapptive.com/dynamictable';

//store
import { StoreModule } from '@ngrx/store';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MasterConfigurationRoutingModule } from './master-configuration-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { EffectsModule } from '@ngrx/effects';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SharedModule } from '../../shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MasterConfigurationContainerComponent } from './master-config-container/master-config.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { EmissionAlertsComponent } from './components/emission-alerts/emission-alerts.component';
import { AlertsEditComponent } from './components/alerts-edit/alerts-edit.component';
import { AlertsEditModalComponent } from './components/alerts-edit/alerts-edit-modal.component';
import { DynamicStepperComponent } from './components/dynamic-stepper/dynamic-stepper.component';
import { StepsheaderComponent } from './components/stepsheader/stepsheader.component';
import { AlertHeaderConfigComponent } from './components/alert-header-config/alert-header-config.component';
import { riskMatrixConfigurationReducer } from './state/risk-matrix.reducer';
import { AlertTriggerComponent } from './components/alert-trigger/alert-trigger.component';
// import { RiskMatrixEffects } from './state/risk-matrix.effects';
@NgModule({
  declarations: [
    MasterConfigurationContainerComponent,
    AlertsComponent,
    EmissionAlertsComponent,
    AlertsEditComponent,
    AlertsEditModalComponent,
    DynamicStepperComponent,
    StepsheaderComponent,
    AlertHeaderConfigComponent,
    AlertTriggerComponent,


  ],
  imports: [
    // MatDialogModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    MatAutocompleteModule,
    DynamictableModule,
    DragDropModule,
    CdkScrollableModule,
    ScrollingModule,
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    SharedModule,
    MatSelectModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    ScrollingModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatRadioModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTabsModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MasterConfigurationRoutingModule,
    MatTableModule,
    MatToolbarModule,
    StoreModule.forFeature('RiskMatrix', {
      riskMatrixConfiguration: riskMatrixConfigurationReducer,
    }),
    // EffectsModule.forFeature([RiskMatrixEffects]),
  ],
  exports: [],
  providers: []
})
export class MasterConfigurationModule {}
