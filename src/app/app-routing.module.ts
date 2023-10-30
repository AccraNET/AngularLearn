import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './Articles/Articles.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { MyProfileComponent } from './HomePages/my-profile/my-profile.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    children:[
      {
        path: "/home/profile",
        component: MyProfileComponent
      },
      {
        path: "",
        redirectTo: './profile'
      },
      {
        path: '**',
        redirectTo: './profile'
      }
    ]
  },
  {
    path: "**",
    pathMatch: "full",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
