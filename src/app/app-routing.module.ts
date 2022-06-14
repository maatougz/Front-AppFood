import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
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
      {path: 'user/upd', component: UpduserComponent,}
      
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
