import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { SellerComponent } from './component/seller/seller.component';
import { BackendAdminComponent } from './component/backend-admin/backend-admin.component';
import { MobileAppComponent } from './component/mobile-app/mobile-app.component';
import { ProductComponent } from './component/product/product.component';
import { RegionComponent } from './component/region/region.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    AppComponent,
    SellerComponent,
    BackendAdminComponent,
    MobileAppComponent,
    ProductComponent,
    RegionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAqOQbNeIpZht7tl0bpInV7lrzRHSl0VtU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
