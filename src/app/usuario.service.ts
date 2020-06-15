import { Injectable } from '@angular/core';
import {Modelo} from './modelo';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuariosUrl = 'api/usuarios';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'aplication/json'})
  };
  constructor(private http: HttpClient) { }



  //Se obtinen los usuarios desde el server
  getUsuarios(): Observable<Modelo[]>{
    return this.http.get<Modelo[]>(this.usuariosUrl)
    .pipe(
      catchError(this.handleError<Modelo[]>('getUsuarios', []))
    );
  }



  getUsuario(id: number): Observable<Modelo>{
    const url = `${this.usuariosUrl}/${id}`;
    return this.http.get<Modelo>(url).pipe(
      tap(_ => console.log(`fetched Usuario id=${id}`)),
      catchError(this.handleError<Modelo>(`getUsuario id=${id}`))
    );
  }

  //Actualizar Usuario
  updateUsuario(usuario: Modelo): Observable<any>{
    return this.http.put(this.usuariosUrl,usuario,this.httpOptions).pipe(
      tap(_=> console.log(`actualizado usuario id=${usuario.id}`)),
      catchError(this.handleError<any>('update'))
    );
  }

  //Añadir Usuario
  addUsuario(usuario: Modelo): Observable<any>{
    return this.http.post<Modelo>(this.usuariosUrl, usuario, this.httpOptions)
    .pipe(
      tap((newUsuario: Modelo) => console.log(`add new usuario id = ${usuario.id}`)),
      catchError(this.handleError<Modelo>('addUsuario'))
    )
  }

  //Eliminar Usuario
  deleteUsuario(usuario: Modelo | number): Observable<any>{
    const id = typeof usuario === 'number' ? usuario : usuario.id;
    const url = `${this.usuariosUrl}/${id}`;
    return this.http.delete<Modelo>(url, this.httpOptions).pipe(
      tap(_ => console.log(`Eleminado Usuario id=${id}`)),
      catchError(this.handleError<Modelo>('deleteUsuario'))
    );
  }



  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }




}
