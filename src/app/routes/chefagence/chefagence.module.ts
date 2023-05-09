import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ChefagenceRoutingModule } from './chefagence-routing.module';
import { ChefagenceListcolischefComponent } from './listcolischef/listcolischef.component';
import { ChefagenceListcolisclientComponent } from './listcolisclient/listcolisclient.component';
import { SearchChefAgPipe } from '@shared/pipes/searchchefag.pipe';

const COMPONENTS: any[] = [ChefagenceListcolischefComponent, SearchChefAgPipe,ChefagenceListcolisclientComponent];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [
    SharedModule,
    ChefagenceRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ]
})
export class ChefagenceModule { }
