import { Injectable } from '@angular/core';
import { ClProducto } from './model/CLProducto';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const apiUrl = 'https://sumativa2.onrender.com/api/productos/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error("Error en operación: ", operation, error); 
      return of(result as T);
    };
  }

  addProducto(producto: ClProducto): Observable<ClProducto> {
    console.log("Agregando producto: ", producto);
    return this.http.post<ClProducto>(apiUrl, producto, httpOptions)
      .pipe(
        tap((producto: ClProducto) => console.log('Producto agregado:', producto)),
        catchError(this.handleError<ClProducto>('addProducto'))
      );
  }

  getProductos(idProducto: string): Observable<ClProducto[]> {
    console.log('Obteniendo productos con idProducto y código "08-g1":', idProducto);
    const url = `${apiUrl}?idProducto=${idProducto}`; // Agrega el parámetro de consulta para filtrar por idProducto
    return this.http.get<ClProducto[]>(url, httpOptions)
      .pipe(
        map((productos: ClProducto[]) => productos.filter(producto => producto.codigo === '08-g1')), // Utiliza map para filtrar por código '08-g1'
        tap(_ => console.log('Productos obtenidos')),
        catchError(this.handleError('getProductos', []))
      );
  }
  getProducto(idProducto: string): Observable<ClProducto> {
    console.log("Obteniendo producto con ID:", idProducto);
    return this.http.get<ClProducto>(apiUrl + idProducto)
      .pipe(
        tap(_ => console.log(`Producto obtenido con ID: ${idProducto}`)),
        catchError(this.handleError<ClProducto>(`getProducto id=${idProducto}`))
      );
  }

  deleteProducto(idProducto: number): Observable<ClProducto> {
    return this.http.delete<ClProducto>(apiUrl + idProducto, httpOptions)
      .pipe(
        tap(_ => console.log('Producto eliminado con ID:', idProducto)),
        catchError(this.handleError<ClProducto>('deleteProducto'))
      );
  }

  updateProducto(idProducto: number, producto: ClProducto): Observable<ClProducto> {
    return this.http.put<ClProducto>(apiUrl + idProducto, producto, httpOptions)
      .pipe(
        tap(_ => console.log('Producto actualizado con ID:', idProducto)),
        catchError(this.handleError<any>('updateProducto'))
      );
  }
}