import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileLayoutComponent } from './layout/layout.component';
import { ProfileOveriewComponent } from './overiew/overiew.component';
import { ProfileSettingsComponent } from './settings/settings.component';

const routes: Routes = [{ path: 'layout', component: ProfileLayoutComponent },
{ path: 'overiew', component: ProfileOveriewComponent },
{ path: 'settings', component: ProfileSettingsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
