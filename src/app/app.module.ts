import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { CounterService } from './Counter.service';
import { ProfileComponent } from './Profile/Profile.component';

@NgModule({
  declarations: [			
      HomeComponent,
      CounterComponent,
      ProfileComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [BrowserModule],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
