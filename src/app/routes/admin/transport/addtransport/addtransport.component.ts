import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Transport } from '../transport.model';
import { TransportService } from '../transport.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin-transport-addtransport',
  templateUrl: './addtransport.component.html',
  styleUrls: ['./addtransport.component.css']
})
export class AdminTransportAddtransportComponent implements OnInit {
public transportform !: FormGroup;
public idToUpdate !: number;
public isActiveUpdate : boolean = false
public transports !: Transport[]
  transport : Transport = {
    matricule:''

  }
  dataSource: any;
  constructor(private builder: FormBuilder,private activaterouter: ActivatedRoute
     ,private transportservice: TransportService,private router: Router) { }

  ngOnInit() {
    this.transportform = this.builder.nonNullable.group({
      id: ['', [Validators.required]],
      matricule: ['', [Validators.required]],



    });
this.activaterouter.params.subscribe(val=>{
  this.idToUpdate =val['id'];
  this.transportservice.readById(this.idToUpdate).subscribe(res=>{
    this.isActiveUpdate = true;
    this.fillForm(res);
  })
})
  }

  fillForm(transport : Transport){
    this.transportform.setValue({
      id : transport.id,
      matricule : transport.matricule
    })
  }
  update(){


    this.transportservice.create(this.transportform.value).subscribe(() => {


      alert("modification avec succee.");
      this.gettransport();
      this.router.navigate(['/admin/listlocal'])

     });
this.transportform.reset();


  }


gettransport(){
  this.transportservice.read().subscribe(res=>{
    this.transports=res;
    this.dataSource = new MatTableDataSource(this.transports);


  })
}

  create(): void {

    this.transportservice.create(this.transport).subscribe(() => {

      this.router.navigate(['/admin/listtransport'])
     alert("enregistrement avec succee.")
    })


  }

  cancel(): void {
    this.router.navigate(['/admin/listtransport'])
  }




}
