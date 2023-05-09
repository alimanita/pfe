import { Component, OnInit } from '@angular/core';
import { RoleService } from '../role.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from '../role.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin-Roles-addrole',
  templateUrl: './addrole.component.html',
  styleUrls: ['./addrole.component.css']
})
export class AdminRolesAddroleComponent implements OnInit {

  public idToUpdate !: number;
  public isActiveUpdate : boolean = false
  public groupform!:FormGroup
  public  roles!:Role[];
  public showModal: boolean = false;
  public dataSource: any;
  role : Role = {
    nom:''

  }

  constructor(private builder: FormBuilder,private roleservice: RoleService,
    private activaterouter: ActivatedRoute ,private router: Router) { }

  ngOnInit() {
    this.groupform = this.builder.nonNullable.group({
      id: ['', [Validators.required]],
      nom: ['', [Validators.required]],



    });
this.activaterouter.params.subscribe(val=>{
  this.idToUpdate =val['id'];
  this.roleservice.readById(this.idToUpdate).subscribe(res=>{
    this.isActiveUpdate = true;
    this.fillForm(res);
  })
})

  }
  update(){


    this.roleservice.create(this.groupform.value).subscribe(() => {


      alert("modification avec succee.");
      this.getlocal();
      this.router.navigate(['/admin/listrole'])

     });
this.groupform.reset();


  }

  fillForm(role : Role){
    this.groupform.setValue({
      id : role.id,
      nom : role.nom
    })
  }
  getlocal(){
    this.roleservice.read().subscribe(res=>{
      this.roles=res;
      this.dataSource = new MatTableDataSource(this.roles);


    })
  }

deletelocal(id:any)
{
this.roleservice .delete(id).subscribe(res=>{
  console.log("ok supprimer")
})


}
  create(): void {

    this.roleservice.create(this.groupform.value).subscribe(() => {


     alert("enregistrement avec succee.")
     this.getlocal();
     this.router.navigate(['/admin/listrole']);
    });



  }
  close(){
    this.showModal = false;
  }

  open(){
    this.showModal = true;
  }


  cancel(): void {
    this.router.navigate(['/admin/listrole'])
  }


}
