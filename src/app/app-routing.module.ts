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
import { AboutUsComponent } from './user/about-us/about-us.component';
import { BrandComponent } from './user/brand/brand.component';
import { ContactComponent } from './user/contact/contact.component';
import { IndexComponent } from './user/index/index.component';
import { RecipeComponent } from './user/recipe/recipe.component';
import { RecipeaddComponent } from './user/recipe/recipeadd/recipeadd.component';
import { RecipelistComponent } from './user/recipe/recipelist/recipelist.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'admin', component: AdminComponent,
    children:[
      {path: '', component: DashboardComponent,},
      {path: 'user/list', component: ListuserComponent,},
      {path: 'user/listrole', component: ListroleComponent,},
      {path: 'user/addrole', component: AddroleComponent,},
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
      {path: 'recipe', component: ListrecipeComponent,},
      {path: 'recipe/add', component: AddrecipeComponent,},
      {path: 'recipe/upd', component: UpdrecipeComponent,},
      {path: 'review', component: ListreviewComponent,},

    ],
  },
  { path: 'user', component: UserComponent,
    children:[
      {path: '', component: IndexComponent,},
      {path: 'contact', component: ContactComponent,},
      {path: 'about', component: AboutUsComponent,},
      {path: 'brands', component: BrandComponent,},
      {path: 'recipes', component: RecipelistComponent,},
      {path: 'recipe/add', component: RecipeaddComponent,},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
