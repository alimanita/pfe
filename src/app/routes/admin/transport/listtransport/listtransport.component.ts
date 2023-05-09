import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TransportService } from '../transport.service';
import { Transport } from '../transport.model';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { AdminAdresseAddadresseComponent } from '../../adresse/addadresse/addadresse.component';
import { AdminTransportAddtransportComponent } from '../addtransport/addtransport.component';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-transport-listtransport',
  templateUrl: './listtransport.component.html',
  styleUrls: ['./listtransport.component.css']
})
export class AdminTransportListtransportComponent implements OnInit  {

  searchText='';
  transports!: Transport[];
  displayedColumns: string[] = ['id', 'matricule'];
  dataSource = new MatTableDataSource<Transport>;

  transport !: Transport;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  columns: MtxGridColumn[] = [
    { header: 'id', field: 'id' },
    { header: 'matricule', field: 'matricule' },

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
          click: record => this.edit(record.id),
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





  constructor( private transportservice : TransportService,private dialogue:MatDialog, public dialog: MtxDialog ,private router : Router) { }


  ngOnInit(): void {

  this.getlocal();

  }
  edit(value: any) {
    const dialogRef = this.dialog.originalOpen(AdminTransportAddtransportComponent, {
      width: '100%',
      data: { record: value },
    });

    dialogRef.afterClosed().subscribe(() => console.log('The dialog was closed'));
  }
  editnew(){
    this.router.navigate(['/admin/addtransport'])

  }
  delete(id:any)
  {
  this.transportservice.delete(id).subscribe();
this.getlocal();

 }
gettransport(){
  this.transportservice.read().subscribe(res=> {
    this.transports = res;
    this.dataSource = new MatTableDataSource(this.transports);

  });

}
getlocal(){
  this.transportservice.read().subscribe(res=>{
    this.transports=res;
    this.dataSource = new MatTableDataSource(this.transports);
this.dataSource.paginator = this.paginator;

  })
}

update(): void {
  this.transportservice.update(this.transport).subscribe(() => {
    this.transportservice.showMessage("Produto atualizado com sucesso!");
    this.router.navigate(["/products"]);
  });
}
openajout1(){
  this.dialogue.open(AdminTransportAddtransportComponent,{
    width:'70%',
    exitAnimationDuration:'1000ms',
    enterAnimationDuration:'1000ms',


  })

}
}
