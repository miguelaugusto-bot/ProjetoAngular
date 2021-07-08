import { Usuario } from './../model/Usuario';
import { UserLogin } from './../model/UserLogin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }


  login(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('https://apimnblog.herokuapp.com/usuarios/logar', userLogin)

  }

  cadastrar(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('https://apimnblog.herokuapp.com/usuarios/cadastrar', user)

  }

  /*
  getByIdUser(id: number): Observable<Usuario> {
      let params = new HttpParams()
        .set('id', id)
  
        console.log(environment.token)
        console.log(this.token)
      return this.http.get<Usuario>(https://apiblogpessoaljg.herokuapp.com/usuarios/buscar-id?${params}, this.token)
    }
  
    getByIdUser(id: number): Observable<Usuario>{
      console.log(this.token)
      return this.http.get<Usuario>(`https://apimnblog.herokuapp.com/usuarios/${id}`, this.token)
    }
  */
  logado() {
    let ok: boolean = false

    if (environment.token != '') {
      ok = true
    }
    return ok
  }
}
