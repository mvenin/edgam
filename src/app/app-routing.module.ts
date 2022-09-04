import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCvComponent } from './features/letters/app-cv.component';
import { AppComponent } from './app.component';
import { AppDashboardComponent } from './features/letters/app-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AppDashboardComponent },
  { path: 'vowels', component: AppCvComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
