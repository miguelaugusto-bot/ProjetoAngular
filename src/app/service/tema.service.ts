import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient
  ) { }
  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }
  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://apimnblog.herokuapp.com/tema/all', this.token)
  }

  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`https://apimnblog.herokuapp.com/tema/${id}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://apimnblog.herokuapp.com/tema/add', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('https://apimnblog.herokuapp.com/tema/update', tema, this.token)
  }

  deleteTema(id: number){
    return this.http.delete(`https://apimnblog.herokuapp.com/tema/delete/${id}`, this.token)
  }


}
