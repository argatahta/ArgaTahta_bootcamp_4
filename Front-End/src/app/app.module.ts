import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductdetailComponent
  ],
  imports: [
    BrowserModule,HttpModule,RouterModule.forRoot([
      {path:"", component: ProductlistComponent},
      {path:"detail/:id", component: ProductdetailComponent},
      //if path doesnt exist, redirect to home
      {path: '**', redirectTo: ''}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
