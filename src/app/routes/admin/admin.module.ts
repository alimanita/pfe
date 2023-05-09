import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminLivreurListlivreurComponent } from './livreur/listlivreur/listlivreur.component';
import { AdminLivreurAddlivreurComponent } from './livreur/addlivreur/addlivreur.component';
import { AdminExpediteurListexpediteurComponent } from './expediteur/listexpediteur/listexpediteur.component';
import { AdminExpediteurAddexpediteurComponent } from './expediteur/addexpediteur/addexpediteur.component';
import { AdminDestinateurAddestinateurComponent } from './destinateur/addestinateur/addestinateur.component';
import { AdminDestinateurListdestinateurComponent } from './destinateur/listdestinateur/listdestinateur.component';
import { AdminLocalListlocalComponent } from './local/listlocal/listlocal.component';
import { AdminLocalAddlocalComponent } from './local/addlocal/addlocal.component';
import { AdminUtilisateurListuserComponent } from './utilisateur/listuser/listuser.component';
import { AdminUtilisateurAdduserComponent } from './utilisateur/adduser/adduser.component';
import { AdminAdresseListadresseComponent } from './adresse/listadresse/listadresse.component';
import { AdminAdresseAddadresseComponent } from './adresse/addadresse/addadresse.component';
import { AdminVoyageAddvoyageComponent } from './voyage/addvoyage/addvoyage.component';
import { AdminVoyageListvoyageComponent } from './voyage/listvoyage/listvoyage.component';
import { AdminRolesAddroleComponent } from './Roles/addrole/addrole.component';
import { AdminRolesListroleComponent } from './Roles/listrole/listrole.component';
import { AdminTransportListtransportComponent } from './transport/listtransport/listtransport.component';


import { AdminAdresseUpdateComponent } from './adresse/update/update.component';

import { AdminDestinateurUpdateComponent } from './destinateur/update/update.component';

import { AdminLivreurUpdateComponent } from './livreur/update/update.component';

import { AdminRolesUpdateComponent } from './Roles/update/update.component';
import { AdminTransportUpdateComponent } from './transport/update/update.component';

import { AdminTransportAddtransportComponent } from './transport/addtransport/addtransport.component';
import { MaterialModule } from 'app/material.module';
import { SearchPipe } from '@shared/pipes/search.pipe';

const COMPONENTS: any[] = [];
const COMPONENTS_DYNAMIC: any[] = [AdminLivreurAddlivreurComponent,
   AdminLivreurListlivreurComponent,
    AdminLivreurAddlivreurComponent,
    AdminExpediteurListexpediteurComponent,
     AdminExpediteurAddexpediteurComponent,
    AdminDestinateurAddestinateurComponent,
     AdminDestinateurListdestinateurComponent,
    AdminLocalListlocalComponent,
     AdminLocalAddlocalComponent,
      AdminUtilisateurListuserComponent,

    AdminUtilisateurAdduserComponent,
    AdminAdresseListadresseComponent,
     AdminAdresseAddadresseComponent,
     AdminVoyageAddvoyageComponent,
     AdminVoyageListvoyageComponent,
     AdminRolesAddroleComponent,
     AdminRolesListroleComponent,
      AdminTransportListtransportComponent,

       AdminAdresseUpdateComponent,
       AdminDestinateurUpdateComponent,

         AdminLivreurUpdateComponent,

          AdminRolesUpdateComponent,
          AdminTransportUpdateComponent,
          SearchPipe,
            AdminTransportAddtransportComponent];

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule,
    MaterialModule,


  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ]
})
export class AdminModule { }
