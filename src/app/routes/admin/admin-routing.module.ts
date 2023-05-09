import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAdresseAddadresseComponent } from './adresse/addadresse/addadresse.component';
import { AdminAdresseListadresseComponent } from './adresse/listadresse/listadresse.component';

import { AdminDestinateurAddestinateurComponent } from './destinateur/addestinateur/addestinateur.component';
import { AdminDestinateurListdestinateurComponent } from './destinateur/listdestinateur/listdestinateur.component';
import { AdminExpediteurAddexpediteurComponent } from './expediteur/addexpediteur/addexpediteur.component';
import { AdminExpediteurListexpediteurComponent } from './expediteur/listexpediteur/listexpediteur.component';
import { AdminLivreurAddlivreurComponent } from './livreur/addlivreur/addlivreur.component';
import { AdminLivreurListlivreurComponent } from './livreur/listlivreur/listlivreur.component';
import { AdminLivreurUpdateComponent } from './livreur/update/update.component';
import { AdminLocalAddlocalComponent } from './local/addlocal/addlocal.component';
import { AdminLocalListlocalComponent } from './local/listlocal/listlocal.component';
import { AdminRolesAddroleComponent } from './Roles/addrole/addrole.component';
import { AdminRolesListroleComponent } from './Roles/listrole/listrole.component';
import { AdminTransportAddtransportComponent } from './transport/addtransport/addtransport.component';

import { AdminTransportListtransportComponent } from './transport/listtransport/listtransport.component';
import { AdminUtilisateurAdduserComponent } from './utilisateur/adduser/adduser.component';
import { AdminUtilisateurListuserComponent } from './utilisateur/listuser/listuser.component';
import { AdminVoyageAddvoyageComponent } from './voyage/addvoyage/addvoyage.component';
import { AdminVoyageListvoyageComponent } from './voyage/listvoyage/listvoyage.component';

const routes: Routes = [

  {path:'listlocal',component:AdminLocalListlocalComponent},
  {path:'addlocal',component:AdminLocalAddlocalComponent},
  {path:'listlivreur',component:AdminLivreurListlivreurComponent},
  {path:'addlivreur',component:AdminLivreurAddlivreurComponent},
  {path:'listexpediteur',component:AdminExpediteurListexpediteurComponent},
  {path:'addexpediteur',component:AdminExpediteurAddexpediteurComponent},
  {path:'listdestinateur',component:AdminDestinateurListdestinateurComponent},
  {path:'adddestinateur',component:AdminDestinateurAddestinateurComponent},
  {path:'addutilisateur',component:AdminUtilisateurAdduserComponent},
  {path:'listutilisateur',component:AdminUtilisateurListuserComponent},
  {path:'listrole',component:AdminRolesListroleComponent},
  {path:'addrole',component:AdminRolesAddroleComponent},
  {path:'listtransport',component:AdminTransportListtransportComponent},
  {path:'addtransport',component:AdminTransportAddtransportComponent},
  {path:'listvoyage',component:AdminVoyageListvoyageComponent},
  {path:'addvoyage',component:AdminVoyageAddvoyageComponent},

  {path:'listadresse',component:AdminAdresseListadresseComponent},
  {path:'addadresse',component:AdminAdresseAddadresseComponent},

  {path :'updatelocale/:id',component: AdminLocalAddlocalComponent},
  {path :'updatelivreur/:id',component: AdminLivreurAddlivreurComponent},
  {path :'updateexpediteur/:id',component: AdminExpediteurAddexpediteurComponent},
  {path :'updatedestinateur/:id',component: AdminDestinateurAddestinateurComponent},
  {path :'updateutilisateur/:id',component: AdminUtilisateurAdduserComponent},
  {path :'updaterole/:id',component: AdminRolesAddroleComponent},
  {path :'updatetranspor/:id',component: AdminTransportAddtransportComponent},
  {path :'updatevoyage/:id',component: AdminVoyageAddvoyageComponent},
  {path :'updateadresse/:id',component: AdminAdresseAddadresseComponent},
  {path : 'testlivreur',component:AdminLivreurUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
