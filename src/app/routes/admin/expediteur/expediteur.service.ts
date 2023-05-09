import { Injectable } from '@angular/core';


import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Expediteur } from './expediteur.model';


@Injectable({
  providedIn: 'root'
})
export class ExpediteurService {
  showMessage(arg0: string) {
    throw new Error('Method not implemented.');
  }
  baseUrl = "http://localhost:8080/colis/expediteur";

  constructor(private http: HttpClient) { }

  create(expediteur: Expediteur): Observable<Expediteur> {

    return this.http.post<Expediteur>(this.baseUrl+'/create', expediteur);


  }
  read(): Observable<Expediteur[]> {

    return this.http.get<Expediteur[]>(this.baseUrl+'/all').pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )

  }
 redId(livreur :Expediteur):Observable<Expediteur>{
  return  this.http.get<Expediteur>(this.baseUrl+'read');
 }

  readById(id: number): Observable<Expediteur> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Expediteur>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(expediteur: Expediteur): Observable<Expediteur> {
    const url = `${this.baseUrl}/${expediteur.id}`;
    return this.http.put<Expediteur>(url, expediteur).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }



  errorHandler(e: any): Observable<any> {

    return EMPTY;
  }




  deleteexpediteur(id: number):Observable<Expediteur>{
  return this.http.delete<Expediteur>(`${this.baseUrl+'/delete'}/${id}`);
  console.log({id});

 }

}
