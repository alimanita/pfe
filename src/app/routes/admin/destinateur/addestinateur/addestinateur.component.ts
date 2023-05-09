import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Destnateur } from '../destinateur.model';
import { DestinateurService } from '../destinateur.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin-destinateur-addestinateur',
  templateUrl: './addestinateur.component.html',
  styleUrls: ['./addestinateur.component.css']
})
export class AdminDestinateurAddestinateurComponent implements OnInit {
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


    create(): void {

      this.destinateurservice.create(this.destinateur).subscribe(() => {
console.log("enregistrement");

        this.router.navigate(['/admin/listdestinateur'])
       alert("enregistrement avec succee.")
      })

    }

    cancel(): void {
      this.router.navigate(['/admin/listdestinateur'])
    }

    fillForm(destinateur : Destnateur){
      this.destinateurForm.setValue({
        id : destinateur.id,
        nom : destinateur.nom,
        prenom: destinateur.prenom,
        num_tel:destinateur.num_tel

      })
    }
    update(){


      this.destinateurservice.create(this.destinateurForm.value).subscribe(() => {


        alert("modification avec succee.");
        this.getdestinateur();
        this.router.navigate(['/admin/listdestinateur'])

       });
    this.destinateurForm.reset();


    }
    getdestinateur(){
      this.destinateurservice.read().subscribe(res=>{
        this.destinateurs=res;
        this.dataSource = new MatTableDataSource(this.destinateurs);


      })
    }
}
