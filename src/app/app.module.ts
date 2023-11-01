import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { CounterService } from './Counter.service';
import { ProfileComponent } from './Profile/Profile.component';
import { ArticlesComponent } from './Articles/Articles.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { ContainerOneComponent } from './container-one/container-one.component';
import { ContainerTwoComponent } from './container-two/container-two.component';
import { ContainerMainComponent } from './container-main/container-main.component';
import { NavigationBarComponent } from './Navigation/navigation-bar/navigation-bar.component';
import { CustomComponent } from './HomePages/custom/custom.component';
import { LoginComponent } from './account/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChecklistComponent } from './checklist/checklist.component';

@NgModule({
  declarations: [									
      HomeComponent,
      CounterComponent,
      ProfileComponent,
      ArticlesComponent,
      PageNotFoundComponent,
      ContainerOneComponent,
      ContainerTwoComponent,
      ContainerMainComponent,
      NavigationBarComponent,
      CustomComponent,
      LoginComponent,
      ChecklistComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [BrowserModule],
  providers: [],
  bootstrap: [ContainerMainComponent]
})
export class AppModule { }
