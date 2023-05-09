import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,Form } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Livreur } from '../livreur.model';
import { LivreurService } from '../livreur.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin-livreur-addlivreur',
  templateUrl: './addlivreur.component.html',
  styleUrls: ['./addlivreur.component.css']
})
export class AdminLivreurAddlivreurComponent implements OnInit {
  livreur : Livreur = {

    nom:'',
    prenom: '',
    numtel:0
  }
  livreurs!: Livreur[];
  showModal: boolean = false;
  public liv:Livreur={} as Livreur;
  livreureurform!:FormGroup
  dataSource: any;
  public idlocalToUpdate !: number;
  public isActiveUpdate : boolean = false

  constructor(private builder:FormBuilder,private activaterouter: ActivatedRoute ,
     private livreurservice: LivreurService,private dialogue:MatDialog,
      private router: Router

      ) { }

  ngOnInit(): void {
    this.livreureurform = this.builder.group({
      id:this.builder.control({value:'',disabled:true}),
      nom:this.builder.control('',Validators.required),
      prenom:this.builder.control('',Validators.required),
      num_tel:this.builder.control('',Validators.required)
    });

    this.activaterouter.params.subscribe(val=>{
      this.idlocalToUpdate =val['id'];
      this.livreurservice.readById(this.idlocalToUpdate).subscribe(res=>{
        this.isActiveUpdate = true;
        this.fillForm(res);
      })
    })
}
fillForm(livreur : Livreur){
  this.livreureurform.setValue({
    id : livreur.id,
    nom : livreur.nom,
    prenom: livreur.prenom,
    num_tel:livreur.numtel

  })
}
update(){


  this.livreurservice.update(this.livreureurform.value).subscribe(() => {


    alert("modification avec succee.");
    this.getlivreur();
    this.router.navigate(['/admin/listlivreur'])

   });
this.livreureurform.reset();


}
getlivreur(){
  this.livreurservice.read().subscribe(res=>{
    this.livreurs=res;
    this.dataSource = new MatTableDataSource(this.livreurs);


  })
}

  create(): void {

    this.livreurservice.create(this.livreur).subscribe(() => {



     alert("enregistrement avec succee.");
this.cancel();

    });

  }

  cancel(): void {

    this.router.navigate(['/admin/listlivreur'])
  }



  createlev(){
return this.livreurservice.createliv(this.livreur).subscribe((data:Livreur)=>{
  this.router.navigate(['/admin/listlivreur'])
})
  }
  open(){
    this.showModal = true;
  }
  close(){
    this.showModal = false;
  }
  create1(){

    this.livreurservice.create(this.livreur).subscribe(() => {


     alert("enregistrement avec succee.")
    });

  }
}
