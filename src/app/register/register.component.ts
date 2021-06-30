import { AuthService } from './../service/auth.service';
import { Usuario } from './../model/Usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: Usuario = new Usuario
  confirmaSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0)
  }

  confirmSenha(event: any){
    this.confirmaSenha = event.target.value
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  cadastrar(){
    this.user.tipo = this.tipoUsuario

    if(this.user.senha != this.confirmaSenha){
      alert('deu ruim')
    }
    else{
      this.authService.cadastrar(this.user).subscribe((resp: Usuario) =>{
        this.user = resp
        this.router.navigate(['/login'])
        alert('feito')

      })
    }
  }
}
