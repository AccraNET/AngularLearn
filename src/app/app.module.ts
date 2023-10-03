import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ToDoContainerComponent } from './to-do-container/to-do-container.component';

@NgModule({
  declarations: [
    ToDoContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [BrowserModule],
  providers: [],
  bootstrap: [ToDoContainerComponent]
})
export class AppModule { }
