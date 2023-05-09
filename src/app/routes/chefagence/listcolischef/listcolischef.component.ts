import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { Destnateur } from 'app/routes/admin/destinateur/destinateur.model';
import { Expediteur } from 'app/routes/admin/expediteur/expediteur.model';
import { ClientAddcolisclientComponent } from 'app/routes/client/addcolisclient/addcolisclient.component';
import { Colis } from 'app/routes/client/colis.model';
import { ColisService } from 'app/routes/client/colis.service';

@Component({
  selector: 'app-chefagence-listcolischef',
  templateUrl: './listcolischef.component.html',
  styleUrls: ['./listcolischef.component.css']
})
export class ChefagenceListcolischefComponent implements OnInit {
 public expidit = new Expediteur('','',0);
public searchName = '';
public  searchText='';
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
    { header: 'statut', field: 'statut' },
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

  ngOnInit() {
    this.redbyStatut('aenlever');
  }

  delete(id:any)
  {
  this.colisservice .delete(id).subscribe()


 }

 editnew(id :number){

  this.router.navigate(['/admin/updateexpediteur',id])
    }
    colisdetail(id : number){
      this.router.navigate(['/client/detailcolis',id]);


    }
    openajouteColis(){
      this.dialogue.open(ClientAddcolisclientComponent,{
        width:'100%',
        exitAnimationDuration:'1000ms',
        enterAnimationDuration:'1000ms',


      })

    }
    redbyStatut(statut : string){
      this.colisservice.readByStatut(statut).subscribe((res : Colis[]) =>{

        this.listColis = res;
        this.dataSource = new MatTableDataSource(this.listColis);

        console.log(res);

      })

     }


}
