import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { LivreurRoutingModule } from './livreur-routing.module';
import { LivreurListcolislivreurComponent } from './listcolislivreur/listcolislivreur.component';

const COMPONENTS: any[] = [LivreurListcolislivreurComponent];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [
    SharedModule,
    LivreurRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ]
})
export class LivreurModule { }
