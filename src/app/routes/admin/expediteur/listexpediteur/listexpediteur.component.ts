import { Component, OnInit } from '@angular/core';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { Expediteur } from '../expediteur.model';
import {ExpediteurService} from '../../expediteur/expediteur.service'
import { MatDialog } from '@angular/material/dialog';

import { AdminExpediteurAddexpediteurComponent } from '../addexpediteur/addexpediteur.component';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-admin-expediteur-listexpediteur',
  templateUrl: './listexpediteur.component.html',
  styleUrls: ['./listexpediteur.component.css']
})
export class AdminExpediteurListexpediteurComponent implements OnInit {


  searchName = '';
  searchText='';




  expediteurs !: Expediteur;


columns: MtxGridColumn[] = [
  { header: 'id', field: 'id' },
  { header: 'nom', field: 'nom' },
  { header: 'prenom', field: 'prenom' },
  { header: 'num_tel', field: 'num_tel' },

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
        click: (record) => this.editnew(record.id)
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
        click: (record: any) => {this.deleteexpediteur(record.id)},
      },
    ],
  },
];
  constructor( private expediteurservice : ExpediteurService,private dialogue:MatDialog , private router : Router) { }
  exp!:Expediteur[];

  dataSource: any;
  ngOnInit(): void {

   this.getexpediteur();

  }

  getexpediteur(){
    this.expediteurservice.read().subscribe(res=>{
      this.exp=res;
      this.dataSource = new MatTableDataSource(this.exp);


    })
  }
  editnew(id :number){

    this.router.navigate(['/admin/updateexpediteur',id])
      }

  openajoutexpediteur(id:any){
    this.dialogue.open(AdminExpediteurAddexpediteurComponent,{
      width:'100%',
      exitAnimationDuration:'1000ms',
      enterAnimationDuration:'1000ms',
      data:{id:id}

    })

  }
  openajout1(){
    this.dialogue.open(AdminExpediteurAddexpediteurComponent,{
      width:'70%',
      exitAnimationDuration:'1000ms',
      enterAnimationDuration:'1000ms',


    })

  }

  deleteexpediteur(id:any)
  {
  this.expediteurservice .deleteexpediteur(id).subscribe()


 }

}
