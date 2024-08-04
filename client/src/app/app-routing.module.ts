import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "master-configuration",
    loadChildren: () =>
      import(
        "./components/master-configuration/master-configuration.module"
      ).then((m) => m.MasterConfigurationModule),
  },
  {
    path: "",
    redirectTo: "master-configuration",
    pathMatch: "full",
  },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
