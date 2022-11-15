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
import { AddrecipeComponent } from './admin/manage-recipe/addrecipe/addrecipe.component';
import { ListrecipeComponent } from './admin/manage-recipe/listrecipe/listrecipe.component';
import { UpdrecipeComponent } from './admin/manage-recipe/updrecipe/updrecipe.component';
import { AddrestoComponent } from './admin/manage-resto/addresto/addresto.component';
import { ListrestoComponent } from './admin/manage-resto/listresto/listresto.component';
import { UpdrestoComponent } from './admin/manage-resto/updresto/updresto.component';
import { ListreviewComponent } from './admin/manage-review/listreview/listreview.component';
import { AddroleComponent } from './admin/manage-user/addrole/addrole.component';
import { AdduserComponent } from './admin/manage-user/adduser/adduser.component';
import { ListroleComponent } from './admin/manage-user/listrole/listrole.component';
import { ListuserComponent } from './admin/manage-user/listuser/listuser.component';
import { UpduserComponent } from './admin/manage-user/upduser/upduser.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutUsComponent } from './user/about-us/about-us.component';
import { AccountComponent } from './user/account/account.component';
import { BrandComponent } from './user/brand/brand.component';
import { ContactComponent } from './user/contact/contact.component';
import { IndexComponent } from './user/index/index.component';
import { AdsearchrecipeComponent } from './user/recipe/adsearchrecipe/adsearchrecipe.component';
import { OnerecipeComponent } from './user/recipe/onerecipe/onerecipe.component';
import { RecipeaddComponent } from './user/recipe/recipeadd/recipeadd.component';
import { RecipebyadvacedsearchComponent } from './user/recipe/recipebyadvacedsearch/recipebyadvacedsearch.component';
import { RecipebysearchComponent } from './user/recipe/recipebysearch/recipebysearch.component';
import { RecipelistComponent } from './user/recipe/recipelist/recipelist.component';
import { AdresultrestoComponent } from './user/resto/adresultresto/adresultresto.component';
import { AdsearchrestoComponent } from './user/resto/adsearchresto/adsearchresto.component';
import { MenuComponent } from './user/resto/menu/menu.component';
import { RestoComponent } from './user/resto/resto.component';
import { RestosbysearchComponent } from './user/resto/restosbysearch/restosbysearch.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  
  { path: 'admin', component: AdminComponent,
    children:[
      {path: '', component: DashboardComponent,canActivate:[AuthGuard]},
      {path: 'user/list', component: ListuserComponent,canActivate:[AuthGuard]},
      {path: 'user/listrole', component: ListroleComponent,canActivate:[AuthGuard]},
      {path: 'user/addrole', component: AddroleComponent,canActivate:[AuthGuard]},
      {path: 'user/add', component: AdduserComponent,canActivate:[AuthGuard]},
      {path: 'user/upd/:id', component: UpduserComponent,canActivate:[AuthGuard]},
      {path: 'brand', component: ListbrandComponent,canActivate:[AuthGuard]},
      {path: 'brand/add', component: AddbrandComponent,canActivate:[AuthGuard]},
      {path: 'brand/upd/:id', component: UpdbrandComponent,canActivate:[AuthGuard]},
      {path: 'placecat', component: ListplaceCatComponent,canActivate:[AuthGuard]},
      {path: 'placecat/add', component: AddplaceCatComponent,canActivate:[AuthGuard]},
      {path: 'placecat/upd/:id', component: UpdplaceCatComponent,canActivate:[AuthGuard]},
      {path: 'dishcat', component: ListdishCatComponent,canActivate:[AuthGuard]},
      {path: 'dishcat/add', component: AdddishCatComponent,canActivate:[AuthGuard]},
      {path: 'dishcat/upd/:id', component: UpddishCatComponent,canActivate:[AuthGuard]},
      {path: 'resto', component: ListrestoComponent,canActivate:[AuthGuard]},
      {path: 'resto/add', component: AddrestoComponent,canActivate:[AuthGuard]},
      {path: 'resto/upd/:id', component: UpdrestoComponent,canActivate:[AuthGuard]},
      {path: 'dish', component: ListdishComponent,canActivate:[AuthGuard]},
      {path: 'dish/add', component: AdddishComponent,canActivate:[AuthGuard]},
      {path: 'dish/upd/:id', component: UpddishComponent,canActivate:[AuthGuard]},
      {path: 'recipe', component: ListrecipeComponent,canActivate:[AuthGuard]},
      
      {path: 'recipe/upd/:id', component: UpdrecipeComponent,canActivate:[AuthGuard]},
      {path: 'review', component: ListreviewComponent,canActivate:[AuthGuard]},

    ],
  },
  { path: 'user', component: UserComponent,
    children:[
      {path: '', component: IndexComponent,},
      {path: 'contact', component: ContactComponent,},
      {path: 'about', component: AboutUsComponent,},
      {path: 'brands', component: BrandComponent,},
      {path: 'recipes', component: RecipelistComponent,},
      {path: 'ADSearchRecipe', component: AdsearchrecipeComponent, },
      {path: 'resultrecipead', component: RecipebyadvacedsearchComponent,},
      {path: 'resultrecipe', component: RecipebysearchComponent,},
      {path: 'recipe/addrecipe', component: RecipeaddComponent,},
      {path: 'recipe/:id', component: OnerecipeComponent,},
      {path: 'account', component: AccountComponent,},
      {path: 'resultresto', component: RestosbysearchComponent,},
      {path: 'restos/:id', component: RestoComponent,},
      {path: 'menu/:id', component: MenuComponent,},
      {path: 'ADSearchResto', component: AdsearchrestoComponent,},
      {path: 'resultrestoad', component: AdresultrestoComponent,},
    ],
  },
  { path: 'login', component: LoginComponent},
  { path: 'forgotpass', component: ForgotPasswordComponent},
  { path: 'signup', component: SignUpComponent},
  { path:'',redirectTo:'/user',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],providers: [AuthGuard]
})
export class AppRoutingModule { }
