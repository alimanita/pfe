import { Injectable } from '@angular/core';


import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Local } from './local.model';



@Injectable({
  providedIn: 'root'
})
export class LocalService {
  showMessage(arg0: string) {
    throw new Error('Method not implemented.');
  }
  baseUrl = "http://localhost:8080/colis/local";

  constructor(private http: HttpClient) { }

  create(local: Local): Observable<Local> {

    return this.http.post<Local>("http://localhost:8080/colis/local/create", local);


  }
  read(): Observable<Local[]> {

    return this.http.get<Local[]>(this.baseUrl+'/all').pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )

  }


  readById(id: number): Observable<Local> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Local>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(local: Local): Observable<Local> {
    const url = `${this.baseUrl}/${local.id}`;
    return this.http.put<Local>(url, local).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }



  errorHandler(e: any): Observable<any> {

    return EMPTY;
  }





 deletelocal(id: number):Observable<Local>{
  return this.http.delete<Local>(`${this.baseUrl+'/delete'}/${id}`);
 }


}
