import { Injectable } from '@angular/core';
import { ClProducto } from './model/categoria';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiUrl = 'https://sumativa2.onrender.com/api/productos/';
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error('Error en operación:', operation, error); 
      return throwError(result as T);
    };
  }

  getProductos(categoria: string): Observable<ClProducto[]> {
    console.log('Obteniendo productos por categoría:', categoria);
    const url = `${apiUrl}?categoria=${categoria}`; // Agrega el parámetro de consulta para filtrar por categoría
    return this.http.get<ClProducto[]>(url, httpOptions)
      .pipe(
        tap(() => console.log('Productos obtenidos')),
        catchError(this.handleError('getProductos', []))
      );
  }
}