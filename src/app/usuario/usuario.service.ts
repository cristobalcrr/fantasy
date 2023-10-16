import { Injectable } from '@angular/core';
import { ClUsuario } from './model/ClUsuario';



import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const apiUrl = "http://localhost:3000/usuarios";
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error("handleError Harrys", error); 
      return of(result as T);
    };
  }

    addUsuario(usuario: ClUsuario): Observable<ClUsuario> {
      console.log("Res-api Enviando AddUsuario : ", usuario);
      return this.http.post<ClUsuario>(apiUrl, usuario, httpOptions)
      .pipe(
        tap((usuario: ClUsuario) => console.log('added usuario w/:', usuario)),
        catchError(this.handleError<ClUsuario>('addUsuario'))
      );
  }

    getUsuarios(): Observable<ClUsuario[]> {
     console.log("getUsuario ()");
      return this.http.get<ClUsuario[]>(apiUrl)
       .pipe(
         tap(heroes => console.log('fetched usuarios')),
          catchError(this.handleError('getUsuarios', []))
      );
  }

    getUsuario(id: String): Observable<ClUsuario> {
    console.log("getUsuario ID:" + id);
    return this.http.get<ClUsuario>(apiUrl + "/" + id)
      .pipe(
        tap(_ => console.log('fetched Usuario id=${id}')),
        catchError(this.handleError<ClUsuario>('getUsuario id=${id}'))
      );
  }
   
  deleteUsuario(id: number): Observable<ClUsuario> {
    return this.http.delete<ClUsuario>(apiUrl + "/" + id, httpOptions)
      .pipe(
        tap(_ => console.log('deleted usuario id=${id}')),
        catchError(this.handleError<ClUsuario>('deleteUsuario'))
      );
  }

  updateUsuario(id: number, usuario : ClUsuario): Observable<ClUsuario> {
    return this.http.put<ClUsuario>(apiUrl + "/" + id, usuario , httpOptions)
      .pipe(
        tap(_ => console.log('updated usuario id=${id}')),
        catchError(this.handleError<any>('updateUsuario'))
      );
  }

   


}