import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { permissions } from '../../app.constants';
import { MasterConfigurationContainerComponent } from './master-config-container/master-config.component';
import { AlertsComponent } from './components/alerts/alerts.component';

const routes: Routes = [
  {
    path: '',
    component: MasterConfigurationContainerComponent,
    canActivate: [],
    data: {
      breadcrumb: { label: 'Master Configuration', disable: true },
      permissions: [permissions.viewTenants]
    },
    children: [
      {
        path: 'alerts',
        component:AlertsComponent ,
        data: {
          breadcrumb: { label: 'Alert', disable: true },
          permissions: [permissions.viewTenants]
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterConfigurationRoutingModule {}
