import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddbrandComponent } from './admin/manage-brand/addbrand/addbrand.component';
import { ListbrandComponent } from './admin/manage-brand/listbrand/listbrand.component';
import { UpdbrandComponent } from './admin/manage-brand/updbrand/updbrand.component';
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
      {path: 'brand/upd', component: UpdbrandComponent,}
      
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
