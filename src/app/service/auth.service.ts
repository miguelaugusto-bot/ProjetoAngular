import { Usuario } from './../model/Usuario';
import { UserLogin } from './../model/UserLogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient 
  ) {   }

  login(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://apimnblog.herokuapp.com/swagger-ui/#/usuario-controller/PostUsingPOST', userLogin)

  }

  cadastrar(user: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://apimnblog.herokuapp.com/swagger-ui/#/usuario-controller/AutenticationUsingPOST', user)

  }
}
