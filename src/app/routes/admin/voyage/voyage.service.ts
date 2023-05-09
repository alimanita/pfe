import { Injectable } from '@angular/core';


import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Voyage } from './voyage.model';






@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  showMessage(arg0: string) {
    throw new Error('Method not implemented.');
  }
  baseUrl = "http://localhost:8080/colis/voyage";

  constructor(private http: HttpClient) { }

  create(transport: Voyage): Observable<Voyage> {

    return this.http.post<Voyage>(this.baseUrl+'/create', transport);


  }
  read(): Observable<Voyage[]> {

    return this.http.get<Voyage[]>(this.baseUrl+'/all').pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )

  }
 redId(transport :Voyage):Observable<Voyage>{
  return  this.http.get<Voyage>(this.baseUrl+'read');
 }

  readById(id: number): Observable<Voyage> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Voyage>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(role: Voyage): Observable<Voyage> {
    const url = `${this.baseUrl}/${role.id}`;
    return this.http.put<Voyage>(url, role).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }



  errorHandler(e: any): Observable<any> {

    return EMPTY;
  }




  delete(id: number):Observable<Voyage>{
  return this.http.delete<Voyage>(`${this.baseUrl+'/delete'}/${id}`);
 }



}
