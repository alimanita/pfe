import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Local } from '../local.model';
import { LocalService } from '../local.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin-local-addlocal',
  templateUrl: './addlocal.component.html',
  styleUrls: ['./addlocal.component.css']
})
export class AdminLocalAddlocalComponent implements OnInit {
  public idlocalToUpdate !: number;
  public isActiveUpdate : boolean = false
  public localform!:FormGroup
  public  locals!:Local[];
  public showModal: boolean = false;
  public dataSource: any;
  public id!: number;
  local : Local = {
    nom:''

  }

  constructor(private builder: FormBuilder,private localservice: LocalService,
    private activaterouter: ActivatedRoute ,private router: Router) { }

  ngOnInit() {

    this.localform = this.builder.nonNullable.group({
      id: ['', [Validators.required]],
      nom: ['', [Validators.required]],



    });
    this.activaterouter.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id); // afficher l'ID dans la console pour vérification
    });
this.activaterouter.params.subscribe(val=>{
  this.idlocalToUpdate =val['id'];
  this.localservice.readById(this.idlocalToUpdate).subscribe(res=>{
    this.isActiveUpdate = true;
    this.fillForm(res);
  })
})

  }
  update(){


    this.localservice.create(this.localform.value).subscribe(() => {


      alert("modification avec succee.");
      this.getlocal();
      this.router.navigate(['/admin/listlocal'])

     });
this.localform.reset();


  }

  fillForm(local : Local){
    this.localform.setValue({
      id : local.id,
      nom : local.nom
    })
  }
  getlocal(){
    this.localservice.read().subscribe(res=>{
      this.locals=res;
      this.dataSource = new MatTableDataSource(this.locals);


    })
  }

deletelocal(id:any)
{
this.localservice .deletelocal(id).subscribe(res=>{
  console.log("ok supprimer")
})


}
  create(): void {

    this.localservice.create(this.localform.value).subscribe(() => {


     alert("enregistrement avec succee.")
     this.getlocal();
     this.router.navigate(['/admin/listlocal']);
    });



  }
  close(){
    this.showModal = false;
  }

  open(){
    this.showModal = true;
  }


  cancel(): void {
    this.router.navigate(['/admin/listlocal'])
  }

}
