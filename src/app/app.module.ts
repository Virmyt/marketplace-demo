import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SellerComponent } from './component/seller/seller.component';
import { BackendAdminComponent } from './component/backend-admin/backend-admin.component';
import { MobileAppComponent } from './component/mobile-app/mobile-app.component';
import { ProductComponent } from './component/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    SellerComponent,
    BackendAdminComponent,
    MobileAppComponent,
    ProductComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
