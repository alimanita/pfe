import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientAddcolisclientComponent } from './addcolisclient/addcolisclient.component';
import { ClientListcolisclientComponent } from './listcolisclient/listcolisclient.component';
import { ClientDetailcolisclientComponent } from './detailcolisclient/detailcolisclient.component';

const routes: Routes = [{ path: 'addcolisclient', component: ClientAddcolisclientComponent },
{ path: 'listcolisclient', component: ClientListcolisclientComponent },
{ path: 'detailcolisclient', component: ClientDetailcolisclientComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
