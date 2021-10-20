import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainUserComponent} from "./main-user/main-user.component";
import {ProductComponent} from "./product/product.component";
import {HomeComponent} from "./home/home.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {FormUserComponent} from "./form-user/form-user.component";

const ROUTES: Routes = [
  {path: 'user', component: MainUserComponent,children:[
      {path:'category/:category', component: ListUserComponent}
    ]},
  {path: 'product', component:ProductComponent},
  {path: 'home', component:HomeComponent},
  {path: 'add', component:FormUserComponent},
  {path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path: '**', component: NotfoundComponent},
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
