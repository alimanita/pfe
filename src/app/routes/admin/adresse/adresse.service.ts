import { Injectable } from '@angular/core';


import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Adresse } from './adresse.model';



@Injectable({
  providedIn: 'root'
})
export class AdresseService {
  showMessage(arg0: string) {
    throw new Error('Method not implemented.');
  }
  baseUrl = "http://localhost:8080/colis/adresse";

  constructor(private http: HttpClient) { }

  create(adresse: Adresse): Observable<Adresse> {

    return this.http.post<Adresse>(this.baseUrl+'/create', adresse);


  }
  read(): Observable<Adresse[]> {

    return this.http.get<Adresse[]>(this.baseUrl+'/all').pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )

  }


  readById(id: number): Observable<Adresse> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Adresse>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(adresse: Adresse): Observable<Adresse> {
    const url = `${this.baseUrl}/${adresse.id}`;
    return this.http.put<Adresse>(url, adresse).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }



  errorHandler(e: any): Observable<any> {

    return EMPTY;
  }




  delete(id: number):Observable<Adresse>{
  return this.http.delete<Adresse>(`${this.baseUrl+'/delete'}/${id}`);
 }



}
