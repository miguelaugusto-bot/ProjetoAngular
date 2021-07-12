import { Postagem } from './../model/Postagem';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient
  ) { }
  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  refreshToken(){
    this.token = { headers: new HttpHeaders().set("Authorization", environment.token)}
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://apimnblog.herokuapp.com/postagem/procurar/${id}`, this.token)
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://apimnblog.herokuapp.com/postagem/all', this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://apimnblog.herokuapp.com/postagem/postar', postagem, this.token)
  }

  putPostagem(id: number, postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>(`https://apimnblog.herokuapp.com/postagem/atualizar/${id}`, postagem, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`https://apimnblog.herokuapp.com/postagem/deletar/${id}`, this.token);
  }
}

