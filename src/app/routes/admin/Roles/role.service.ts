import { Injectable } from '@angular/core';


import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Role } from './role.model';




@Injectable({
  providedIn: 'root'
})
export class RoleService {
  showMessage(arg0: string) {
    throw new Error('Method not implemented.');
  }
  baseUrl = "http://localhost:8080/colis/role";

  constructor(private http: HttpClient) { }

  create(role: Role): Observable<Role> {

    return this.http.post<Role>(this.baseUrl+'/create', role);


  }
  read(): Observable<Role[]> {

    return this.http.get<Role[]>(this.baseUrl+'/all').pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )

  }
 redId(role :Role):Observable<Role>{
  return  this.http.get<Role>(this.baseUrl+'read');
 }

  readById(id: number): Observable<Role> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Role>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(role: Role): Observable<Role> {
    const url = `${this.baseUrl}/${role.id}`;
    return this.http.put<Role>(url, role).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }



  errorHandler(e: any): Observable<any> {

    return EMPTY;
  }




  delete(id: number):Observable<Role>{
  return this.http.delete<Role>(`${this.baseUrl+'/delete'}/${id}`);
 }



}
