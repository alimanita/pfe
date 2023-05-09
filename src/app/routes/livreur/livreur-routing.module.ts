import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivreurListcolislivreurComponent } from './listcolislivreur/listcolislivreur.component';

const routes: Routes = [{ path: 'listcolislivreur', component: LivreurListcolislivreurComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivreurRoutingModule { }
