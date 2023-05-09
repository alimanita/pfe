import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { AdminUtilisateurAdduserComponent } from '../adduser/adduser.component';

import { UtilisateurService } from '../user.service';
import { Utilisateur } from '../utilisateur.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-utilisateur-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class AdminUtilisateurListuserComponent implements OnInit {


  columns: MtxGridColumn[] = [
    { header: 'id', field: 'id' },
    { header: 'nom', field: 'nom' },
    { header: 'prenom', field: 'prenom' },
    { header: 'num_tel', field: 'num_tel' },
    { header: 'mot_de_passe', field: 'mot_de_passe' },
    {
      header: 'Operation',
      field: 'operation',
      width: '180px',
      pinned: 'right',
      right: '0px',
      type: 'button',
      buttons: [

        {
          type: 'icon',
          text: 'edit',
          icon: 'edit',
          tooltip: 'Edit',
          click: (record) =>{

            this.editnew(record.id);
          }
        },
        {
          type: 'icon',
          text: 'delete',
          icon: 'delete',
          tooltip: 'Delete',
          color: 'warn',
          pop: {
            title: 'Confirm delete?',
          },
          click: (record) => this.deleteutilisateur(record),
        },
      ],
    },
  ];



  utilisateur !: Utilisateur;
id!: number;
  constructor( private utilisaateurservice : UtilisateurService,private dialogue:MatDialog,private router : Router ) { }
  utili!:Utilisateur[];

  ngOnInit(): void {

    this.utilisaateurservice.read().subscribe(utlisateurs => {
      this.utili = utlisateurs


    });

  }

/*   openajoututilisateur(id:any){
    this.dialogue.open(AdminUtilisateurUpdateComponent,{
      width:'100%',
      exitAnimationDuration:'1000ms',
      enterAnimationDuration:'1000ms',
      data:{id:id}

    })

  } */

  deleteutilisateur(id:any)
  {
  this.utilisaateurservice.deletedeutilisateur(id).subscribe()


 }
 openajout1(){
  this.dialogue.open(AdminUtilisateurAdduserComponent,{
    width:'100%',
    height:'100%',
    exitAnimationDuration:'1000ms',
    enterAnimationDuration:'1000ms',



  })


}
edit1(){

  this.router.navigate(['/admin/livreur/listlivreur']);

}
editnew(id : number){
  this.router.navigate(['/admin/updateutilisateur',id])


}

}
