import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCvComponent } from './features/letters/app-cv.component';
import { AppDashboardComponent } from './features/letters/app-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCvComponent,
    AppDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
