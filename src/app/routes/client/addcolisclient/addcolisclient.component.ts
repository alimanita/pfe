import { Component, OnInit } from '@angular/core';
import { Destnateur } from 'app/routes/admin/destinateur/destinateur.model';
import { Colis } from '../colis.model';
import { FormBuilder, Validators } from '@angular/forms';
import { ColisService } from '../colis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-addcolisclient',
  templateUrl: './addcolisclient.component.html',
  styleUrls: ['./addcolisclient.component.css']
})
export class ClientAddcolisclientComponent implements OnInit {

  public q:Colis;
  public dest:Destnateur;

    constructor(private _formBuilder:FormBuilder,private colisservice : ColisService,private router : Router) {
      this.dest = {
        nom :"",
        prenom : "",
        num_tel:0
      }

      this.q = {poids : 0,
        prix : 0,

      dateEnlevement :"",

        statut : "",
    destinateur : this.dest
      }

    }

    formcolis=this._formBuilder.group({
      id:this._formBuilder.control({value: '',disabled:true}),
      poids:['',Validators.required],
      prix:['',Validators.required],
      dateEnlevement:['',Validators.required],
      statut:['',Validators.required]

    });
    formadresse=this._formBuilder.group({
      id:this._formBuilder.control({value:'',disabled:true}),
      pays: ['', [Validators.required]],
      ville: ['', [Validators.required]],
      region: ['', [Validators.required]],
      rue: ['', [Validators.required]],
      code_postal: ['', [Validators.required]],

    });
    formadestinateur=this._formBuilder.group({
      id:this._formBuilder.control({value:'',disabled:true}),
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      num_tel: ['', [Validators.required]],


    });
    secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    isLinear = false;

    ngOnInit() {



    }

      createcolis(): void {


        this.colisservice.create(this.q).subscribe(() => {

          console.log("enregistrement");
this.router.navigate(['/client/listcolis']);
         })



  }

}
