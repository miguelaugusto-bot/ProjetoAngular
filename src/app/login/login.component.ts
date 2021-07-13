import { TemaService } from './../service/tema.service';
import { environment } from './../../environments/environment.prod';
import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { UserLogin } from './../model/UserLogin';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()
  
  constructor(
    private auth: AuthService,
    private temaService: TemaService,
    private router: Router
  ) { }

  ngOnInit(){
    this.temaService.refreshToken()
    window.scroll(0,0)
  }

  entrar(){
    this.auth.login(this.userLogin).subscribe((resp: UserLogin)=>{
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.foto = this.userLogin.foto
      environment.id = this.userLogin.id

      console.log(environment.token)
      console.log(environment.nome)
      console.log(environment.foto)
      console.log(environment.id)

      this.router.navigate(['/home'])

    }, erro=>{
      if(erro.status == 500){
        alert('usuario ou senha incorreto')
      }
    })
  }
}
