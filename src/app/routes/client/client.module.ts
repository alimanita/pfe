import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ClientRoutingModule } from './client-routing.module';
import { ClientAddcolisclientComponent } from './addcolisclient/addcolisclient.component';
import { ClientListcolisclientComponent } from './listcolisclient/listcolisclient.component';
import { ClientDetailcolisclientComponent } from './detailcolisclient/detailcolisclient.component';
import { SearchClientPipe } from '@shared/pipes/searchclient.pipe';

const COMPONENTS: any[] = [ClientAddcolisclientComponent,
   ClientListcolisclientComponent,
    ClientDetailcolisclientComponent,
    SearchClientPipe]

const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [
    SharedModule,
    ClientRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ]
})
export class ClientModule { }
