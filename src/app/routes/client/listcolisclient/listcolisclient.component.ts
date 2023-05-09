import { Component, OnInit } from '@angular/core';
import { Expediteur } from 'app/routes/admin/expediteur/expediteur.model';
import { Colis } from '../colis.model';
import { Destnateur } from 'app/routes/admin/destinateur/destinateur.model';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { ActivatedRoute, Router } from '@angular/router';
import { ColisService } from '../colis.service';
import { MatDialog } from '@angular/material/dialog';
import { ClientAddcolisclientComponent } from '../addcolisclient/addcolisclient.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-client-listcolisclient',
  templateUrl: './listcolisclient.component.html',
  styleUrls: ['./listcolisclient.component.css']
})
export class ClientListcolisclientComponent implements OnInit {


  public expidit = new Expediteur('','',0);
public searchName = '';
public searchText='';
public listColis! : Colis[] ;
public dataSource : any;
public destinat = new Destnateur('','',0);
public isActiveUpdate:boolean = false;
public idToUpdate!: number
public colis = new Colis(0,0,'','',this.destinat ,this.expidit);
public iddestinateur !: number;
public idExpediteur!:number;




columns: MtxGridColumn[] = [
  { header: 'id', field: 'id' },
  { header: 'poids', field: 'poids' },
  { header: 'prix', field: 'prix' },
  { header: 'dateEnlevement', field: 'dateEnlevement' },
  { header: 'idDestinateur', field: 'destinateur.id' },

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
        text: 'Detail',
        icon: 'info',
        tooltip: 'Detail',
        click: (record) => this.colisdetail(record.id)
      },

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
        click: (record: any) => {this.delete(record.id)},
      },
    ],
  },
];
  constructor( private colisservice : ColisService,private  activaterouter: ActivatedRoute,
    private dialogue:MatDialog , private router : Router) { }


  ngOnInit(): void {
    this.activaterouter.params.subscribe(val=>{
      this.idToUpdate =val['id'];
      this.colisservice.readByExpediteur(this.idToUpdate).subscribe(res=>{
        this.isActiveUpdate = true;

      })
    });
this.redbyexpediteur(10)
//this.redbyexpediteurthis.idToUpdate)

}




  getiddestinateur(){

  }
  colisdetail(id : number){
    this.router.navigate(['/client/detailcolis',id]);


  }
 // getcolis(){
 /*    this.colisservice.read().subscribe(res=>{
      this.listColis=res;
      this.dataSource = new MatTableDataSource(this.listColis);


    }); */

  //}

  editnew(id :number){

    this.router.navigate(['/admin/updateexpediteur',id])
      }

  openajouteColis(){
    this.dialogue.open(ClientAddcolisclientComponent,{
      width:'100%',
      exitAnimationDuration:'1000ms',
      enterAnimationDuration:'1000ms',


    })

  }


  delete(id:any)
  {
  this.colisservice .delete(id).subscribe()


 }
  redbyexpediteur(id : number){
  this.colisservice.readByExpediteur(id).subscribe(res =>{

    this.listColis = res;
    this.dataSource = new MatTableDataSource(this.listColis);

    console.log(res);

  })

 }

}
