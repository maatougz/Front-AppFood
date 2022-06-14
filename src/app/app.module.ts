import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './admin/footer/footer.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { ManageUserComponent } from './admin/manage-user/manage-user.component';
import { ManageBrandComponent } from './admin/manage-brand/manage-brand.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdduserComponent } from './admin/manage-user/adduser/adduser.component';
import { ListuserComponent } from './admin/manage-user/listuser/listuser.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ManageUserComponent,
    ManageBrandComponent,
    DashboardComponent,
    AdduserComponent,
    ListuserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
