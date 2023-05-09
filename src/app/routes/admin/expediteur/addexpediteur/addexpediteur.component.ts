import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Expediteur} from '../expediteur.model';
import {ExpediteurService} from '../../expediteur/expediteur.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-expediteur-addexpediteur',
  templateUrl: './addexpediteur.component.html',
  styleUrls: ['./addexpediteur.component.css']
})
export class AdminExpediteurAddexpediteurComponent implements OnInit {

  q  : Expediteur= {
    nom:'',
    prenom: '',
    num_tel:0
  }
  showModal: boolean = false;
  expediteureurform!:FormGroup;
  public idlocalToUpdate !: number;
  public isActiveUpdate : boolean = false;
  exp!:Expediteur[];
  constructor( private builder : FormBuilder,private activaterouter: ActivatedRoute ,private expediteurservice : ExpediteurService,private router: Router) { }


  reactiveForm1 = this.builder.nonNullable.group({
    nom: ['', [Validators.required]],
    prenom: ['', [Validators.required]],
    num_tel: ['', [Validators.required]],

  });
  ngOnInit(): void {
    this.expediteureurform = this.builder.nonNullable.group({

        id:this.builder.control({value:'',disabled:true}),
        nom:this.builder.control('',Validators.required),
        prenom:this.builder.control('',Validators.required),
        num_tel:this.builder.control('',Validators.required)
      });

    this.activaterouter.params.subscribe(val=>{
      this.idlocalToUpdate =val['id'];
      this.expediteurservice.readById(this.idlocalToUpdate).subscribe(res=>{
        this.isActiveUpdate = true;
        this.fillForm(res);
      })
    })
}
fillForm(expediteur : Expediteur){
  this.expediteureurform.setValue({
    id : expediteur.id,
    nom : expediteur.nom,
    prenom: expediteur.prenom,
    num_tel:expediteur.num_tel

  })
}

update(){


  this.expediteurservice.update(this.expediteureurform.value).subscribe(() => {


    alert("modification avec succee.");
    this.getexpediteur();
    this.router.navigate(['/admin/listexpediteur'])

   });
this.expediteureurform.reset();


}

cancel(): void {

  this.router.navigate(['/admin/listexpediteur'])
}

  create(): void {

 console.log("enregistrement");
 this.expediteurservice.create(this.q).subscribe(() => {

  this.router.navigate(['/listexpediteur'])
 alert("enregistrement avec succee.")
})
console.log("enregistrement avec succee");

  }
  getexpediteur(){
    this.expediteurservice.read().subscribe(expediteurs => {
      this.exp = expediteurs


    });
  }
}
