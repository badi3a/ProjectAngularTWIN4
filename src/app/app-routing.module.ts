import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainUserComponent} from "./main-user/main-user.component";
import {HomeComponent} from "./home/home.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {FormUserComponent} from "./form-user/form-user.component";
import {LoginComponent} from "./login/login.component";
import {MainProductComponent} from "./main-product/main-product.component";
import {BestSellerProductComponent} from "./best-seller-product/best-seller-product.component";

const ROUTES: Routes = [
  {path: 'user', component: MainUserComponent,children:[
      {path:'category/:category', component: ListUserComponent}
    ]},
  {path:'product', component: MainProductComponent},
  {path: 'home', component:HomeComponent},
  {path: 'subscribe', component:FormUserComponent},
  {path:'login', component:LoginComponent},
  {path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path: 'bestSeller', component: BestSellerProductComponent},
  {path: '**', component: NotfoundComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
