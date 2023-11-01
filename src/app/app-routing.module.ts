import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './Articles/Articles.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { MyProfileComponent } from './HomePages/my-profile/my-profile.component';
import { CustomComponent } from './HomePages/custom/custom.component';
import { LoginComponent } from './account/login/login.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    children:[
      {
        path: "",
        component: MyProfileComponent
      },
      {
        path: "profile",
        component: MyProfileComponent
      },
      {
        path: "custom",
        component: CustomComponent
      },
      {
        path: "",
        redirectTo: "profile",
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'account/login',
    component: LoginComponent
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: 'full'
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
