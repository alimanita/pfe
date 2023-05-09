import { Injectable } from '@angular/core';


import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Transport } from './transport.model';





@Injectable({
  providedIn: 'root'
})
export class TransportService {
  showMessage(arg0: string) {
    throw new Error('Method not implemented.');
  }
  baseUrl = "http://localhost:8080/colis/transport";

  constructor(private http: HttpClient) { }

  create(transport: Transport): Observable<Transport> {

    return this.http.post<Transport>(this.baseUrl+'/create', transport);


  }
  read(): Observable<Transport[]> {

    return this.http.get<Transport[]>(this.baseUrl+'/all').pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )

  }
 redId(transport :Transport):Observable<Transport>{
  return  this.http.get<Transport>(this.baseUrl+'read');
 }

  readById(id: number): Observable<Transport> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Transport>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

 


  errorHandler(e: any): Observable<any> {

    return EMPTY;
  }

  update(transport :Transport): Observable<Transport> {
    const url = `${this.baseUrl}/${transport.id}`;
    return this.http.put<Transport>(url, transport).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }



  delete(id: number):Observable<Transport>{
  return this.http.delete<Transport>(`${this.baseUrl+'/delete'}/${id}`);
 }



}
