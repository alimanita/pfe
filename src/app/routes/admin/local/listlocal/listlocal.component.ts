import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { AdminLocalAddlocalComponent } from '../addlocal/addlocal.component';
import { Local } from '../local.model';
import { LocalService } from '../local.service';

import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-local-listlocal',
  templateUrl: './listlocal.component.html',
  styleUrls: ['./listlocal.component.css']
})
export class AdminLocalListlocalComponent implements AfterViewInit  {

 public searchText='';
  public dataSource = new MatTableDataSource<Local>;
public  locals:Local[] =[];

public local !: Local;
displayedColumns = ['id', 'nom','action']
@ViewChild(MatPaginator) paginator !: MatPaginator ;
columns: MtxGridColumn[] = [
  { header: 'id', field: 'id' },
  { header: 'nom', field: 'nom' },

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
        click: (record ) => this.editnew(record.id),
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
ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
}





  @ViewChild(AdminLocalAddlocalComponent)
  adminLocalAddlocalComponent!: AdminLocalAddlocalComponent;
  constructor( private localservice : LocalService, private router : Router) { }


  ngOnInit(): void {

   this.getlocal();

  }



  open2(){
    this.adminLocalAddlocalComponent.open();
  }





edit(id : number){

  this.router.navigate(['/admin/addlocal'],{ queryParams: { id } });

}
delete(id:any)
{
this.localservice .deletelocal(id).subscribe(res=>{
  this.getlocal();
})
// this.router.navigate(['/updatelocal'], { queryParams: { id: id } });
}
edited(id:number){
  this.router.navigate(['/updatelocal'], { queryParams: { id: id } });
}
getlocal(){
  this.localservice.read().subscribe(res=>{
    this.locals=res;
    this.dataSource = new MatTableDataSource(this.locals);
this.dataSource.paginator = this.paginator;

  })
}

applyfilter(event : Event){
const filtervalue = (event.target as HTMLInputElement).value;
this.dataSource.filter = filtervalue.trim().toLocaleLowerCase();
if(this.dataSource.paginator){
  this.dataSource.paginator.firstPage();
}
}
editnew(id:number){
  this.router.navigate(['/admin/updatelocale',id]);

}
}





