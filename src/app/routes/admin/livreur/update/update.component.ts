import { Component, OnInit ,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminLivreurAddlivreurComponent } from '../addlivreur/addlivreur.component';
import { Livreur } from '../livreur.model';
import { LivreurService } from '../livreur.service';

import {SearchPipe} from '../../../../shared/pipes/search.pipe'
@Component({
  selector: 'app-admin-livreur-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class AdminLivreurUpdateComponent implements OnInit {
  router: any;
  livreur! : Livreur;
  searchText='';
  constructor(private dialogue:MatDialog,
    private livreurservice: LivreurService )
    { }
  livreurs!: Livreur[];

  displayedColumns = ['id', 'nom','prenom', 'num_tel', 'action']
  ngOnInit(): void {

    this.livreurservice.read().subscribe(livreurs => {
      this.livreurs = livreurs
      console.log("aaaa",livreurs);

    });

  }

  openajoutlivreur(id:any){
    this.dialogue.open(AdminLivreurAddlivreurComponent,{
      width:'100%',
      exitAnimationDuration:'1000ms',
      enterAnimationDuration:'1000ms',
      data:{id:id}

    })

  }

  deletelivreur(id : number){
  this.livreurservice.deletelivreur(id).subscribe()

  alert("suppression avec succee.")
 }
}
