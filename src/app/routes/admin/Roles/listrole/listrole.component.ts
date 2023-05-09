import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { AdminRolesAddroleComponent } from '../addrole/addrole.component';
import { Role } from '../role.model';
import { RoleService } from '../role.service';
import { AdminRolesUpdateComponent } from '../update/update.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin-Roles-listrole',
  templateUrl: './listrole.component.html',
  styleUrls: ['./listrole.component.css']
})
export class AdminRolesListroleComponent implements OnInit {
  public searchText='';
  @ViewChild(AdminRolesAddroleComponent)
  adminrolesaddrolecompoent!: AdminRolesAddroleComponent;
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
          click: (record) =>{
            alert('edit')
      this.edit()}
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
          click: (record: any) => this.deleterole(record.id),
        },
      ],
    },
  ];



  router: any;
  role !: Role;
  dataSource: any;
  paginator: any;

  constructor( private roleservice : RoleService,private dialogue:MatDialog ) { }
  roles!:Role[];

  ngOnInit(): void {

    this.roleservice.read().subscribe(rol => {
      this.roles = rol


    });

  }

  openajout(id:any){
    this.dialogue.open(AdminRolesUpdateComponent,{
      width:'100%',
      exitAnimationDuration:'1000ms',
      enterAnimationDuration:'1000ms',
      data:{id:id}

    })

  }

  delete(id:any)
  {
  this.roleservice.delete(id).subscribe()


 }
 openajout1(){
  this.dialogue.open(AdminRolesAddroleComponent,{
    width:'100%',
    exitAnimationDuration:'1000ms',
    enterAnimationDuration:'1000ms',


  })

}
deleterole(id:any)
{
this.roleservice .delete(id).subscribe(res=>{
  this.getrole();
})


}
getrole(){
  this.roleservice.read().subscribe(res=>{
    this.roles=res;
    this.dataSource = new MatTableDataSource(this.roles);


  })
}
edit(){
this.router.navigate(['/admin/addrole'])

}
}
