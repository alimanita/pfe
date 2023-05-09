import { Injectable } from '@angular/core';


import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Destnateur } from './destinateur.model';



@Injectable({
  providedIn: 'root'
})
export class DestinateurService {
  showMessage(arg0: string) {
    throw new Error('Method not implemented.');
  }
  baseUrl = "http://localhost:8080/colis/destinateur";

  constructor(private http: HttpClient) { }

  create(destinateur: Destnateur): Observable<Destnateur> {

    return this.http.post<Destnateur>(this.baseUrl+'/create', destinateur);


  }
  read(): Observable<Destnateur[]> {

    return this.http.get<Destnateur[]>(this.baseUrl+'/all').pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )

  }
 redId(destinateur :Destnateur):Observable<Destnateur>{
  return  this.http.get<Destnateur>(this.baseUrl+'read');
 }

  readById(id: number): Observable<Destnateur> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Destnateur>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(destinateur: Destnateur): Observable<Destnateur> {
    const url = `${this.baseUrl}/${destinateur.id}`;
    return this.http.put<Destnateur>(url, destinateur).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }



  errorHandler(e: any): Observable<any> {

    return EMPTY;
  }




  deletedestinateur(id: number):Observable<Destnateur>{
  return this.http.delete<Destnateur>(`${this.baseUrl+'/delete'}/${id}`);
 }



}
