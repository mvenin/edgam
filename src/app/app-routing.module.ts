import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCvComponent } from './features/letters/app-cv.component';
import { AppDashboardComponent } from './features/letters/app-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AppDashboardComponent, pathMatch: 'full' },
  { path: 'vowels', component: AppCvComponent, pathMatch: 'full' },
  { path: '**', component: AppDashboardComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
