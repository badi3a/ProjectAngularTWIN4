import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainUserComponent } from './main-user/main-user.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { ProductComponent } from './product/product.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ListUserComponent } from './list-user/list-user.component';
import { FormUserComponent } from './form-user/form-user.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainUserComponent,
    ProductComponent,
    NotfoundComponent,
    HomeComponent,
    ListUserComponent,
    FormUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
