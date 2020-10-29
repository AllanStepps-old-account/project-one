import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './flow/landing/landing.component';
import {DashboardGuard} from './guards/dashboard.guard';

const appRoutes: Routes = [
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {
    path: 'landing',
    loadChildren: () => import('./flow/landing/landing.module').then(m => m.LandingModule),
    data: {animation: 'LandingPage'}
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./flow/dashboard/dashboard.module').then(m => m.DashboardModule),
    data: {animation: 'DashboardPage'},
    canActivate: [DashboardGuard]
  },
  // {path: '**', redirectTo: '/landing'}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [DashboardGuard]
})
export class AppRoutingModule {
}
