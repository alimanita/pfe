import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { AdminAdresseAddadresseComponent } from '../addadresse/addadresse.component';
import { Adresse } from '../adresse.model';
import { AdresseService } from '../adresse.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin-adresse-listadresse',
  templateUrl: './listadresse.component.html',
  styleUrls: ['./listadresse.component.css']
})

export class AdminAdresseListadresseComponent implements OnInit {
  searchText='';
  displayedColumns = ['id', 'Pays','Ville','rue', 'codepostal', 'action']
  adresses!:Adresse[];
  columns: MtxGridColumn[] = [
    { header: 'id', field: 'id' },
    { header: 'pays', field: 'pays' },
    { header: 'ville', field: 'ville' },
    { header: 'region', field: 'region' },
    { header: 'rue', field: 'rue' },

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
          click: (record: any) => {this.delete(record.id)},
        },
      ],
    },
  ];

  @ViewChild(MatPaginator) paginator !: MatPaginator ;


  adresse !: Adresse;
  dataSource: any;

  constructor( private adresseservice : AdresseService,private dialogue:MatDialog, private router : Router ) { }


  ngOnInit(): void {
this.getadresse();

  }
  editnew(id :number){

    this.router.navigate(['/admin/updateadresse',id])
      }
  openajoututilisateur(id:any){
    this.dialogue.open(AdminAdresseAddadresseComponent,{
      width:'100%',
      exitAnimationDuration:'1000ms',
      enterAnimationDuration:'1000ms',
      data:{id:id}

    })

  }
  openajoututilisateur1(){
    this.dialogue.open(AdminAdresseAddadresseComponent,{
      width:'100%',
      exitAnimationDuration:'1000ms',
      enterAnimationDuration:'1000ms',


    })

  }
  get(){
    this.adresseservice.read().subscribe(res => {
      this.adresses = res;


    });
  }
  getadresse(){
    this.adresseservice.read().subscribe(res=>{
      this.adresses=res;
      this.dataSource = new MatTableDataSource(this.adresses);


    })
  }
  delete(id:any)
  {
  this.adresseservice.delete(id).subscribe()

this.get()

 }
 openajout1(){
  this.dialogue.open(AdminAdresseAddadresseComponent,{
    width:'100%',
    exitAnimationDuration:'1000ms',
    enterAnimationDuration:'1000ms',


  })

}

}
