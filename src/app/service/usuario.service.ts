import { UserLogin } from './../model/UserLogin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }
  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  refreshToken(){
    this.token = { headers: new HttpHeaders().set("Authorization", environment.token)}
  }

  getByIdUser(id: number): Observable<Usuario>{
    console.log(this.token)
    return this.http.get<Usuario>(`https://apimnblog.herokuapp.com/usuarios/user/${id}`, this.token)
  }
}
