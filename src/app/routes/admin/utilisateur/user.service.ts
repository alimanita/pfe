import { Injectable } from '@angular/core';


import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { Utilisateur } from './utilisateur.model';




@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  showMessage(arg0: string) {
    throw new Error('Method not implemented.');
  }
  baseUrl = "http://localhost:8080/colis/utilisateur";

  constructor(private http: HttpClient) { }

  create(utilisateur: Utilisateur): Observable<Utilisateur> {

    return this.http.post<Utilisateur>(this.baseUrl+'/create', utilisateur);


  }
  read(): Observable<Utilisateur[]> {

    return this.http.get<Utilisateur[]>(this.baseUrl+'/all').pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )

  }
 redId(utilisateur :Utilisateur):Observable<Utilisateur>{
  return  this.http.get<Utilisateur>(this.baseUrl+'read');
 }

  readById(id: number): Observable<Utilisateur> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Utilisateur>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(utilisateur: Utilisateur): Observable<Utilisateur> {
    const url = `${this.baseUrl}/${utilisateur.id}`;
    return this.http.put<Utilisateur>(url, utilisateur).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }



  errorHandler(e: any): Observable<any> {

    return EMPTY;
  }




  deletedeutilisateur(id: number):Observable<Utilisateur>{
  return this.http.delete<Utilisateur>(`${this.baseUrl+'/delete'}/${id}`);
 }



}
