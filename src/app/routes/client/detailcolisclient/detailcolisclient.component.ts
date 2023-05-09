import { Component, OnInit } from '@angular/core';
import { Colis } from '../colis.model';
import { Destnateur } from 'app/routes/admin/destinateur/destinateur.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DestinateurService } from 'app/routes/admin/destinateur/destinateur.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-detailcolisclient',
  templateUrl: './detailcolisclient.component.html',
  styleUrls: ['./detailcolisclient.component.css']
})
export class ClientDetailcolisclientComponent implements OnInit {
  public q!:Colis;
  public dest!:Destnateur;
  destinateur : Destnateur = {
    nom:'',
    prenom: '',
    num_tel:0
  }
  public idToUpdate !: number;
  public isActiveUpdate : boolean = false
  public destinateurs!: Destnateur[]
public destinateurForm !:FormGroup
  dataSource: any;
  constructor(private builder :FormBuilder,private destinateurservice: DestinateurService,
    private activaterouter : ActivatedRoute ,private router:Router) { }


    ngOnInit(): void {
      this.destinateurForm = this.builder.group({
        id:this.builder.control({value:'',disabled:true}),
        nom:this.builder.control('',Validators.required),
        prenom:this.builder.control('',Validators.required),
        num_tel:this.builder.control('',Validators.required)
      });

      this.activaterouter.params.subscribe(val=>{
        this.idToUpdate =val['id'];
        this.destinateurservice.readById(this.idToUpdate).subscribe(res=>{
          this.isActiveUpdate = true;
          this.fillForm(res);
        })
      })

  }

  fillForm(destinateur : Destnateur){
    this.destinateurForm.setValue({
      id : destinateur.id,
      nom : destinateur.nom,
      prenom: destinateur.prenom,
      num_tel:destinateur.num_tel

    })
  }

}
