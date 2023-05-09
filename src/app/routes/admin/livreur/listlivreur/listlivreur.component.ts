import { Component, OnInit, ViewChild, } from '@angular/core';

import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { LivreurService } from '../livreur.service';
import { AdminLivreurAddlivreurComponent } from '../addlivreur/addlivreur.component';
import { MatDialog } from '@angular/material/dialog';
import { Livreur, } from '../livreur.model';

import { DialogConfig } from '@angular/cdk/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-livreur-listlivreur',
  templateUrl: './listlivreur.component.html',
  styleUrls: ['./listlivreur.component.css']
})
export class AdminLivreurListlivreurComponent implements OnInit {
  searchName = '';
  searchText='';

  livreur! : Livreur;


  dataSource: any;

  constructor(
    private livreurservice: LivreurService ,private fb: FormBuilder ,private router :Router)
    { }

  livreurs!: Livreur[];

  displayedColumns = ['id', 'nom','prenom', 'numtel', 'action']
  columns: MtxGridColumn[] = [
    { header: 'id', field: 'id' },
    { header: 'nom', field: 'nom' },
    { header: 'prenom', field: 'prenom' },
    { header: 'numtel', field: 'numtel' },

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
          click: (record) => {this.editnew(record.id)
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
          click: (record: any) => {this.deletelivreur(record.id)},
        },
      ],
    },
  ];
  ngOnInit(): void {
this.getlivreur();

  }

  searchform =new FormGroup({
    searchName : new FormControl()
  });

  getlivreur(){
    this.livreurservice.read().subscribe(res=>{
      this.livreurs=res;
      this.dataSource = new MatTableDataSource(this.livreurs);


    })
  }

  editnew(id :number){

this.router.navigate(['/admin/updatelivreur',id])
  }
  deletelivreur(id : number){
  this.livreurservice.deletelivreur(id).subscribe(res=>{
    this.getlivreur();})

  alert("suppression avec succee.")
 }
 redbyname(name : string){
  this.livreurservice.readByName(name).subscribe(res=>{

    this.livreurs = res;
    this.dataSource = new MatTableDataSource(this.livreurs);

    console.log(res);
    console.log("recherche livreur par nom");
  })

 }

}
