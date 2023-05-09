import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChefagenceListcolischefComponent } from './listcolischef/listcolischef.component';
import { ChefagenceListcolisclientComponent } from './listcolisclient/listcolisclient.component';

const routes: Routes = [{ path: 'listcolischef', component: ChefagenceListcolischefComponent },
{ path: 'listcolischef', component: ChefagenceListcolisclientComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChefagenceRoutingModule { }
