import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateurService } from '../user.service';
import { Utilisateur } from '../utilisateur.model';

@Component({
  selector: 'app-admin-utilisateur-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdminUtilisateurAdduserComponent implements OnInit {
  utilisateur : Utilisateur ={
    nom: '',
    prenom: '',
    num_tel: 0,
    mot_de_passe:''


  }
  userform!:FormGroup
  constructor(private builder : FormBuilder,private utilisateurservice : UtilisateurService,
    private router:Router) { }

  ngOnInit() {
    this.userform = this.builder.group({
      id:this.builder.control({value:'',disabled:true}),
      nom:this.builder.control('',Validators.required),
      prenom:this.builder.control('',Validators.required),
      num_tel:this.builder.control('',Validators.required),
      mot_de_passe:this.builder.control('',Validators.required)
    });
  }


  reactiveForm1 = this.builder.nonNullable.group({

    nom: ['', [Validators.required]],
    prenom: ['', [Validators.required]],
    num_tel: ['', [Validators.required]],
    mot_de_passe: ['', [Validators.required]],


  });
  create(){
    this.utilisateurservice.create(this.utilisateur).subscribe(
      ()=>{
        this.router.navigate(['/admin/listutilisateur'])
        alert('enregistrement avec succes')
      }
    )
  }
cancel(){
  this.router.navigate(['/admin/listutilisateur']);
}
}
