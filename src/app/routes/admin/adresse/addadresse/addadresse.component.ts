import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Adresse } from '../adresse.model';
import { AdresseService } from '../adresse.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin-adresse-addadresse',
  templateUrl: './addadresse.component.html',
  styleUrls: ['./addadresse.component.css']
})
export class AdminAdresseAddadresseComponent implements OnInit {
adresse!:Adresse;
  dataSource: any;
  public idToUpdate !: number;
  public isActiveUpdate : boolean = false
  public adresses!: Adresse[]
  public adresseForm!: FormGroup;
public showModal: boolean = false;

  constructor(private builder:FormBuilder, private activaterouter: ActivatedRoute
    ,private adresseservice :AdresseService,private router:Router) { }

    ngOnInit(): void {
      this.adresseForm = this.builder.group({
        id:this.builder.control({value:'',disabled:true}),
        pays:this.builder.control('',Validators.required),
        ville:this.builder.control('',Validators.required),
        rue:this.builder.control('',Validators.required),
        code_postal:this.builder.control('',Validators.required)
      });

      this.activaterouter.params.subscribe(val=>{
        this.idToUpdate =val['id'];
        this.adresseservice.readById(this.idToUpdate).subscribe(res=>{
          this.isActiveUpdate = true;
          this.fillForm(res);
        })
      })

  }


    create(): void {

      this.adresseservice.create(this.adresse).subscribe(() => {
console.log("enregistrement");

        this.router.navigate(['/admin/listadresse'])
       alert("enregistrement avec succee.")
      })

    }

    cancel(): void {
      this.router.navigate(['/admin/listadresse'])
    }

    fillForm(adresse : Adresse){
      this.adresseForm.setValue({
        id : adresse.id,
        pays : adresse.pays,
        ville: adresse.ville,
        region:adresse.region,
        rue:adresse.rue

      })
    }
    update(){


      this.adresseservice.create(this.adresseForm.value).subscribe(() => {


        alert("modification avec succee.");
        this.getadresse();
        this.router.navigate(['/admin/listadresse'])

       });
    this.adresseForm.reset();


    }
    getadresse(){
      this.adresseservice.read().subscribe(res=>{
        this.adresses=res;
        this.dataSource = new MatTableDataSource(this.adresses);


      })
    }

}
