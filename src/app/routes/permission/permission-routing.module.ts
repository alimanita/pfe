import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermissionRoleSwitchingComponent } from './role-switching/role-switching.component';
import { PermissionRouteGuardComponent } from './route-guard/route-guard.component';

const routes: Routes = [{ path: 'role-switching', component: PermissionRoleSwitchingComponent },
{ path: 'route-guard', component: PermissionRouteGuardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionRoutingModule { }
