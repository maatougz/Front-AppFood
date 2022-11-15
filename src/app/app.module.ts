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
import { ManageRestoComponent } from './admin/manage-resto/manage-resto.component';
import { ListrestoComponent } from './admin/manage-resto/listresto/listresto.component';
import { AddrestoComponent } from './admin/manage-resto/addresto/addresto.component';
import { UpdrestoComponent } from './admin/manage-resto/updresto/updresto.component';
import { ManageDishComponent } from './admin/manage-dish/manage-dish.component';
import { AdddishComponent } from './admin/manage-dish/adddish/adddish.component';
import { ListdishComponent } from './admin/manage-dish/listdish/listdish.component';
import { UpddishComponent } from './admin/manage-dish/upddish/upddish.component';
import { ManageRecipeComponent } from './admin/manage-recipe/manage-recipe.component';
import { ListrecipeComponent } from './admin/manage-recipe/listrecipe/listrecipe.component';
import { AddrecipeComponent } from './admin/manage-recipe/addrecipe/addrecipe.component';
import { UpdrecipeComponent } from './admin/manage-recipe/updrecipe/updrecipe.component';
import { ManageReviewComponent } from './admin/manage-review/manage-review.component';
import { ListreviewComponent } from './admin/manage-review/listreview/listreview.component';
import { ListroleComponent } from './admin/manage-user/listrole/listrole.component';
import { AddroleComponent } from './admin/manage-user/addrole/addrole.component';
import { UserComponent } from './user/user.component';
import { IndexComponent } from './user/index/index.component';
import { ContactComponent } from './user/contact/contact.component';
import { UfooterComponent } from './user/ufooter/ufooter.component';
import { UnavbarComponent } from './user/unavbar/unavbar.component';
import { BrandComponent } from './user/brand/brand.component';
import { RecipeComponent } from './user/recipe/recipe.component';
import { AboutUsComponent } from './user/about-us/about-us.component';
import { RecipelistComponent } from './user/recipe/recipelist/recipelist.component';
import { RecipeaddComponent } from './user/recipe/recipeadd/recipeadd.component';
import { OnerecipeComponent } from './user/recipe/onerecipe/onerecipe.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AccountComponent } from './user/account/account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RestoComponent } from './user/resto/resto.component';
import { RestosbysearchComponent } from './user/resto/restosbysearch/restosbysearch.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RecipebysearchComponent } from './user/recipe/recipebysearch/recipebysearch.component';
import { AdsearchrecipeComponent } from './user/recipe/adsearchrecipe/adsearchrecipe.component';
import { RecipebyadvacedsearchComponent } from './user/recipe/recipebyadvacedsearch/recipebyadvacedsearch.component';
import { MenuComponent } from './user/resto/menu/menu.component';
import { AdsearchrestoComponent } from './user/resto/adsearchresto/adsearchresto.component';
import { AdresultrestoComponent } from './user/resto/adresultresto/adresultresto.component';




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
    ManageRestoComponent,
    ListrestoComponent,
    AddrestoComponent,
    UpdrestoComponent,
    ManageDishComponent,
    AdddishComponent,
    ListdishComponent,
    UpddishComponent,
    ManageRecipeComponent,
    ListrecipeComponent,
    AddrecipeComponent,
    UpdrecipeComponent,
    ManageReviewComponent,
    ListreviewComponent,
    ListroleComponent,
    AddroleComponent,
    UserComponent,
    IndexComponent,
    ContactComponent,
    UfooterComponent,
    UnavbarComponent,
    BrandComponent,
    RecipeComponent,
    AboutUsComponent,
    RecipelistComponent,
    RecipeaddComponent,
    OnerecipeComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    AccountComponent,
    RestoComponent,
    RestosbysearchComponent,
    RecipebysearchComponent,
    AdsearchrecipeComponent,
    RecipebyadvacedsearchComponent,
    MenuComponent,
    AdsearchrestoComponent,
    AdresultrestoComponent,
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
