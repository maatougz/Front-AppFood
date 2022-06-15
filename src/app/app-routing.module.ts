import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddbrandComponent } from './admin/manage-brand/addbrand/addbrand.component';
import { ListbrandComponent } from './admin/manage-brand/listbrand/listbrand.component';
import { UpdbrandComponent } from './admin/manage-brand/updbrand/updbrand.component';
import { AdddishCatComponent } from './admin/manage-dish-cat/adddish-cat/adddish-cat.component';
import { ListdishCatComponent } from './admin/manage-dish-cat/listdish-cat/listdish-cat.component';
import { UpddishCatComponent } from './admin/manage-dish-cat/upddish-cat/upddish-cat.component';
import { AdddishComponent } from './admin/manage-dish/adddish/adddish.component';
import { ListdishComponent } from './admin/manage-dish/listdish/listdish.component';
import { UpddishComponent } from './admin/manage-dish/upddish/upddish.component';
import { AddplaceCatComponent } from './admin/manage-place-cat/addplace-cat/addplace-cat.component';
import { ListplaceCatComponent } from './admin/manage-place-cat/listplace-cat/listplace-cat.component';
import { UpdplaceCatComponent } from './admin/manage-place-cat/updplace-cat/updplace-cat.component';
import { AddrestoComponent } from './admin/manage-resto/addresto/addresto.component';
import { ListrestoComponent } from './admin/manage-resto/listresto/listresto.component';
import { UpdrestoComponent } from './admin/manage-resto/updresto/updresto.component';
import { AdduserComponent } from './admin/manage-user/adduser/adduser.component';
import { ListuserComponent } from './admin/manage-user/listuser/listuser.component';
import { UpduserComponent } from './admin/manage-user/upduser/upduser.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'admin', component: AdminComponent,
    children:[
      {path: '', component: DashboardComponent,},
      {path: 'user', component: ListuserComponent,},
      {path: 'user/add', component: AdduserComponent,},
      {path: 'user/upd', component: UpduserComponent,},
      {path: 'brand', component: ListbrandComponent,},
      {path: 'brand/add', component: AddbrandComponent,},
      {path: 'brand/upd', component: UpdbrandComponent,},
      {path: 'placecat', component: ListplaceCatComponent,},
      {path: 'placecat/add', component: AddplaceCatComponent,},
      {path: 'placecat/upd', component: UpdplaceCatComponent,},
      {path: 'dishcat', component: ListdishCatComponent,},
      {path: 'dishcat/add', component: AdddishCatComponent,},
      {path: 'dishcat/upd', component: UpddishCatComponent,},
      {path: 'resto', component: ListrestoComponent,},
      {path: 'resto/add', component: AddrestoComponent,},
      {path: 'resto/upd', component: UpdrestoComponent,},
      {path: 'dish', component: ListdishComponent,},
      {path: 'dish/add', component: AdddishComponent,},
      {path: 'dish/upd', component: UpddishComponent,},
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
