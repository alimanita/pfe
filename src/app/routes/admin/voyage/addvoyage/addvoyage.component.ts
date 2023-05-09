import { Component, OnInit } from '@angular/core';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { Voyage } from '../voyage.model';

@Component({
  selector: 'app-admin-voyage-addvoyage',
  templateUrl: './addvoyage.component.html',
  styleUrls: ['./addvoyage.component.css']
})
export class AdminVoyageAddvoyageComponent implements OnInit {
  columns: MtxGridColumn[] = [
    { header: 'id', field: 'id' },
    { header: 'poids', field: 'poids' },
    { header: 'prix', field: 'prix' },
    { header: 'dateEnlevement', field: 'dateEnlevement' },
    { header: 'statut', field: 'statut' },


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
          click: (record:any) =>{ alert('edit')
        },
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
          click: (record:any) =>{ alert('edit')}
        },
      ],
    },
  ];

  router: any;
  voyage !: Voyage;

  constructor() { }
  voyages!:Voyage[];
  ngOnInit() {
  }

}
