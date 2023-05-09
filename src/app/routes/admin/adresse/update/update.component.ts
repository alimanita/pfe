import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Adresse } from '../adresse.model';
import { AdresseService } from '../adresse.service';

@Component({
  selector: 'app-admin-adresse-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class AdminAdresseUpdateComponent implements OnInit {

  q  : Adresse= {
    pays: '',
    ville: '',
    region: '',
    rue:'',
    code_postal: 0

  }

  constructor(private fb:FormBuilder,private adresseservice :AdresseService,private router:Router) { }

  ngOnInit() {
  }


  reactiveForm1 = this.fb.nonNullable.group({
    pays: ['', [Validators.required]],
    ville: ['', [Validators.required]],
    region: ['', [Validators.required]],
    rue: ['', [Validators.required]],
    code_postal: ['', [Validators.required]],


  });



  update(){
    this.adresseservice.update(this.q).subscribe(() => {

      this.router.navigate(['/admin/listadresse'])
     alert("enregistrement avec succee.")
    })
  }

}
