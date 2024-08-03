import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';


import { MatSidenavModule } from '@angular/material/sidenav';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { DynamictableModule } from '@innovapptive.com/dynamictable';
import { MatListModule } from '@angular/material/list';
import { ErrorHandlerModule } from './shared/error-handler/error-handler.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatSidenavModule,
    NgxSkeletonLoaderModule,
    DynamictableModule,
    MatListModule,
    ErrorHandlerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
