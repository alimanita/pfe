import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PermissionRoutingModule } from './permission-routing.module';
import { PermissionRoleSwitchingComponent } from './role-switching/role-switching.component';
import { PermissionRouteGuardComponent } from './route-guard/route-guard.component';

const COMPONENTS: any[] = [PermissionRoleSwitchingComponent, PermissionRouteGuardComponent];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [
    SharedModule,
    PermissionRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ]
})
export class PermissionModule { }
