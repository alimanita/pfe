import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { AdminDestinateurAddestinateurComponent } from '../addestinateur/addestinateur.component';
import { Destnateur } from '../destinateur.model';
import { DestinateurService } from '../destinateur.service';

import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-destinateur-listdestinateur',
  templateUrl: './listdestinateur.component.html',
  styleUrls: ['./listdestinateur.component.css']
})
export class AdminDestinateurListdestinateurComponent implements OnInit {
  searchText='';
destinateur !: Destnateur;
  destinateurs !: Destnateur[];
  dataSource!: MatTableDataSource<Destnateur>;

  displayedColumns = ['id', 'nom','prenom','num_tel', 'action']






  constructor( private destinateurservice : DestinateurService,private dialogue:MatDialog, private router: Router ) { }
  desti!:Destnateur[];
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
          click:  (record) => this.editnew(record.id)
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
this.getdestinateur();

  }

/*   getdestinateur(){
    this.destinateurservice.read().subscribe(res=>{
      this.destinateurs=res;
      this.dataSource = new MatTableDataSource(this.destinateurs);


    })
  }
  openajoute(id:any){
    this.dialogue.open(AdminDestinateurUpdateComponent,{
      width:'100%',
      exitAnimationDuration:'1000ms',
      enterAnimationDuration:'1000ms',
      data:{id:id}

    })

  } */

  delete(id:any)
  {
  this.destinateurservice.deletedestinateur(id).subscribe()


 }
 editnew(id :number){

  this.router.navigate(['/admin/updatedestinateur',id])
    }
 openajout1(){
  this.dialogue.open(AdminDestinateurAddestinateurComponent,{
    width:'70%',
    exitAnimationDuration:'1000ms',
    enterAnimationDuration:'1000ms',


  })

}
 getdestinateur(){
  this.destinateurservice.read().subscribe(res=>{
    this.destinateurs=res;
    this.dataSource = new MatTableDataSource(this.destinateurs);


  })
}

deletelivreur(id : number){
this.destinateurservice.deletedestinateur(id).subscribe(res=>{
  this.getdestinateur();})

alert("suppression avec succee.")
}


}
