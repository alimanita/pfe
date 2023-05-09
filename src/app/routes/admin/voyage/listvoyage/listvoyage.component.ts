import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { AdminVoyageAddvoyageComponent } from '../addvoyage/addvoyage.component';

import { Voyage } from '../voyage.model';
import { VoyageService } from '../voyage.service';

@Component({
  selector: 'app-admin-voyage-listvoyage',
  templateUrl: './listvoyage.component.html',
  styleUrls: ['./listvoyage.component.css']
})
export class AdminVoyageListvoyageComponent implements OnInit {

  columns: MtxGridColumn[] = [
    { header: 'id', field: 'id' },
    { header: 'date', field: 'date' },

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
          click: (record) =>{alert('edit')
        this.openajout(record.id)} ,
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
          click: (record: any) =>{ alert('delite')
            this.delete(record.id)
            },


        },
      ],
    },
  ];



  router: any;
  voage !: Voyage;

  constructor( private voyageservice : VoyageService,private dialogue:MatDialog ) { }
  voyges!:Voyage[];

  ngOnInit(): void {

    this.voyageservice.read().subscribe(voy => {
      this.voyges = voy


    });

  }

  openajout(id:any){
    this.dialogue.open(AdminVoyageAddvoyageComponent,{
      width:'100%',
      exitAnimationDuration:'1000ms',
      enterAnimationDuration:'1000ms',
      data:{id:id}

    })

  }

  delete(id:any)
  {
  this.voyageservice.delete(id).subscribe()


 }

 openajout1(){
  this.dialogue.open(AdminVoyageAddvoyageComponent,{
    width:'100%',
    exitAnimationDuration:'1000ms',
    enterAnimationDuration:'1000ms',


  })

}

}
