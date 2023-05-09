import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-permission-role-switching',
  templateUrl: './role-switching.component.html',
  styleUrls: ['./role-switching.component.css']
})
export class PermissionRoleSwitchingComponent implements OnInit {

  currentRole!: string;

  currentPermissions!: string[];

  permissionsOfRole: any = {
    ADMIN: ['canAdd', 'canDelete', 'canEdit', 'canRead'],
    CHEFAGENCE: ['canAdd', 'canEdit', 'canRead'],
    LIVREUR: ['canRead'],
    CLIENT:['canAdd','canRead']
  };

  private readonly _destroy$ = new Subject<void>();

  constructor(private rolesSrv: NgxRolesService, private permissionsSrv: NgxPermissionsService) {}

  ngOnInit() {
    this.currentRole = Object.keys(this.rolesSrv.getRoles())[0];
    this.currentPermissions = Object.keys(this.permissionsSrv.getPermissions());

    this.rolesSrv.roles$.pipe(takeUntil(this._destroy$)).subscribe(roles => {
      console.log(roles);
    });
    this.permissionsSrv.permissions$.pipe(takeUntil(this._destroy$)).subscribe(permissions => {
      console.log(permissions);
    });
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  onPermissionChange() {
    this.currentPermissions = this.permissionsOfRole[this.currentRole];
    this.rolesSrv.flushRolesAndPermissions();
    this.rolesSrv.addRoleWithPermissions(this.currentRole, this.currentPermissions);
  }

}
