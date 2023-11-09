import { Injectable } from '@angular/core';
import { ClProducto } from './model/CLProducto';



import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const apiUrl = "http://sumativa2.onrender.com/api/productos";
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error("handleError Harrys", error); 
      return of(result as T);
    };
  }

    addProducto(Producto: ClProducto): Observable<ClProducto> {
      console.log("Res-api Enviando AddProducto : ", Producto);
      return this.http.post<ClProducto>(apiUrl, Producto, httpOptions)
      .pipe(
        tap((Producto: ClProducto) => console.log('added producto w/:', Producto)),
        catchError(this.handleError<ClProducto>('addProducto'))
      );
  }

    getProductos(): Observable<ClProducto[]> {
     console.log("getProducto ()");
      return this.http.get<ClProducto[]>(apiUrl)
       .pipe(
         tap(heroes => console.log('fetched Productos')),
          catchError(this.handleError('getProductos', []))
      );
  }

    getProducto(idProducto: String): Observable<ClProducto> {
    console.log("getProducto ID:" + idProducto);
    return this.http.get<ClProducto>(apiUrl + "/" + idProducto)
      .pipe(
        tap(_ => console.log('fetched Producto id=${idProducto}')),
        catchError(this.handleError<ClProducto>('getProducto id=${idProducto}'))
      );
  }
   
  deleteProducto(idProducto: number): Observable<ClProducto> {
    return this.http.delete<ClProducto>(apiUrl + "/" + idProducto, httpOptions)
      .pipe(
        tap(_ => console.log('deleted Producto id=${idProducto}')),
        catchError(this.handleError<ClProducto>('deleteProducto'))
      );
  }

  updateProducto(idProducto: number, Producto: ClProducto): Observable<ClProducto> {
    return this.http.put<ClProducto>(apiUrl + "/" + idProducto, ProductServiceService , httpOptions)
      .pipe(
        tap(_ => console.log('updated producto id=${idProducto}')),
        catchError(this.handleError<any>('updateProducto'))
      );
  }

   


}