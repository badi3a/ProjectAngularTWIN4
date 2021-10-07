import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainUserComponent } from './main-user/main-user.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { ProductComponent } from './product/product.component';

const ROUTES: Routes = [
  {path: 'user', component: MainUserComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainUserComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
