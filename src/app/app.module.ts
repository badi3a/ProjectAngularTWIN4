import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainUserComponent } from './main-user/main-user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ListUserComponent } from './list-user/list-user.component';
import { FormUserComponent } from './form-user/form-user.component';
import { LoginComponent } from './login/login.component';
import { MainProductComponent } from './main-product/main-product.component';
import { BestSellerProductComponent } from './best-seller-product/best-seller-product.component';
import { ProductComponent } from './product/product.component';
import { FormProductComponent } from './form-product/form-product.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainUserComponent,
    NotfoundComponent,
    HomeComponent,
    ListUserComponent,
    FormUserComponent,
    LoginComponent,
    MainProductComponent,
    BestSellerProductComponent,
    ProductComponent,
    FormProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
