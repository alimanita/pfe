
import { Injectable } from '@angular/core';


import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Colis } from './colis.model';



@Injectable({
  providedIn: 'root'
})

export class ColisService {
  baseUrl = "http://localhost:8080/colis/colis";

constructor(private http: HttpClient){}

create(colis: Colis): Observable<Colis> {

  return this.http.post<Colis>("http://localhost:8080/colis/colis/create", colis);


}
read(): Observable<Colis[]> {

  return this.http.get<Colis[]>(this.baseUrl+'/all').pipe(
    map((obj) => obj),
    catchError((e) => this.errorHandler(e))
  )

}


readById(id: number): Observable<Colis> {
  const url = `${this.baseUrl}/${id}`;
  return this.http.get<Colis>(url).pipe(
    map((obj) => obj),
    catchError((e) => this.errorHandler(e))
  );
}
readiddestinateur(): Observable<Colis>{
  return this.http.get<Colis>("http://localhost:8080/colis/colis/col/iddestinateur");

}
update(colis: Colis): Observable<Colis> {
  const url = `${this.baseUrl}/${colis.id}`;
  return this.http.put<Colis>(url, colis).pipe(
    map((obj) => obj),
    catchError((e) => this.errorHandler(e))
  );
}

readByExpediteur(id: number): Observable<Colis[]> {
  const url = `http://localhost:8080/colis/colis/list/${id}`;
  return this.http.get<Colis>(url).pipe(map((obj) => obj),
  catchError((e) => this.errorHandler(e))
);
}

readByStatut(statut: string): Observable<Colis[]> {
  const url = `http://localhost:8080/colis/colis/col/${statut}`;
  return this.http.get<Colis>(url).pipe(map((obj) => obj),
  catchError((e) => this.errorHandler(e))
);
}

errorHandler(e: any): Observable<any> {

  return EMPTY;
}




delete(id: number):Observable<Colis>{
return this.http.delete<Colis>(`${this.baseUrl+'/delete'}/${id}`);
}
}
