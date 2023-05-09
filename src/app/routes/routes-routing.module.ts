import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';

import { AdminLayoutComponent } from '../theme/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from '../theme/auth-layout/auth-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './sessions/login/login.component';
import { RegisterComponent } from './sessions/register/register.component';
import { Error403Component } from './sessions/403.component';
import { Error404Component } from './sessions/404.component';
import { Error500Component } from './sessions/500.component';
import { AuthGuard } from '@core';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: '403', component: Error403Component },
      { path: '404', component: Error404Component },
      { path: '500', component: Error500Component },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },

  { path: 'livreur', loadChildren: () => import('./livreur/livreur.module').then(m => m.LivreurModule) },
  { path: 'chefagence', loadChildren: () => import('./chefagence/chefagence.module').then(m => m.ChefagenceModule) },
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  { path: 'permission', loadChildren: () => import('./permission/permission.module').then(m => m.PermissionModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },

    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
    }),
  ],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
