import { Injectable } from '@angular/core';


import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY,Subject } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Livreur } from './livreur.model';

@Injectable({
  providedIn: 'root'
})
export class LivreurService {
  showMessage(arg0: string) {
    throw new Error('Method not implemented.');
  }
  baseUrl = "http://localhost:8080/colis/livreur";
  private _listeners = new Subject<any>();
  listen():Observable<Livreur>{
    return this._listeners.asObservable();
  }
  filter(filterBy :string)
  {
    this._listeners.next(filterBy);

  }

  constructor(private http: HttpClient) { }

  create(livreur: Livreur): Observable<Livreur> {

    return this.http.post<Livreur>(this.baseUrl+'/create', livreur);


  }
  createliv(data:Livreur){
  return this.http.post<Livreur>(this.baseUrl+'/create', data)
  .pipe(map((data:any)=>{
    return data;
  }))
  }
  read(): Observable<Livreur[]> {

    return this.http.get<Livreur[]>(this.baseUrl+'/all').pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )

  }
 redId(livreur :Livreur):Observable<Livreur>{
  return  this.http.get<Livreur>(this.baseUrl+'read');
 }

  readById(id: number): Observable<Livreur> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Livreur>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  readByName(name: string): Observable<any> {
    const url = `http://localhost:8080/colis/livreur/liv/${name}`;
    return this.http.get<Livreur>(url).pipe(map((obj) => obj),
    catchError((e) => this.errorHandler(e))
  );
  }
 // getProductsByName(name: string): Observable<any> {
  //  return this.http.get(`${this.baseUrl}/search?name=${name}`);
  update(livreur: Livreur): Observable<Livreur> {
    const url = `${this.baseUrl+'/update'}/${livreur.id}`;
    return this.http.put<Livreur>(url, livreur).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }



  errorHandler(e: any): Observable<any> {

    return EMPTY;
  }




 deletelivreur(id: number):Observable<Livreur>{
  return this.http.delete<Livreur>(`${this.baseUrl+'/delete'}/${id}`);
 }



}
