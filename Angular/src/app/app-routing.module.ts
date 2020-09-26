import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';import { SearchComponent } from './search/search.component';
import { CategoriesComponent } from './categories/categories.component';
import { RegistrationComponent } from './registration/registration.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { FavouriteComponent } from './favourite/favourite.component';


const routes: Routes = [
  //{path:'',component:LoginComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path:'',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path: 'registration',component:RegistrationComponent},
  {path:'search', component: SearchComponent},
  {path:'categories', component: CategoriesComponent},
  {path:'editprofile',component:EditprofileComponent},
  {path:'favourite',component:FavouriteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
