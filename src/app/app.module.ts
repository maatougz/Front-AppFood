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
import { UpduserComponent } from './admin/manage-user/upduser/upduser.component';
import { ListbrandComponent } from './admin/manage-brand/listbrand/listbrand.component';
import { AddbrandComponent } from './admin/manage-brand/addbrand/addbrand.component';
import { UpdbrandComponent } from './admin/manage-brand/updbrand/updbrand.component';
import { ManagePlaceCatComponent } from './admin/manage-place-cat/manage-place-cat.component';
import { ManageDishCatComponent } from './admin/manage-dish-cat/manage-dish-cat.component';
import { AddplaceCatComponent } from './admin/manage-place-cat/addplace-cat/addplace-cat.component';
import { ListplaceCatComponent } from './admin/manage-place-cat/listplace-cat/listplace-cat.component';
import { UpdplaceCatComponent } from './admin/manage-place-cat/updplace-cat/updplace-cat.component';
import { UpddishCatComponent } from './admin/manage-dish-cat/upddish-cat/upddish-cat.component';
import { AdddishCatComponent } from './admin/manage-dish-cat/adddish-cat/adddish-cat.component';
import { ListdishCatComponent } from './admin/manage-dish-cat/listdish-cat/listdish-cat.component';



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
    UpduserComponent,
    ListbrandComponent,
    AddbrandComponent,
    UpdbrandComponent,
    ManagePlaceCatComponent,
    ManageDishCatComponent,
    AddplaceCatComponent,
    ListplaceCatComponent,
    UpdplaceCatComponent,
    UpddishCatComponent,
    AdddishCatComponent,
    ListdishCatComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
