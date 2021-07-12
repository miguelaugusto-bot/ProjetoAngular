import { Usuario } from './../model/Usuario';
import { Tema } from 'src/app/model/Tema';
import { TemaService } from './../service/tema.service';
import { PostagemService } from './../service/postagem.service';
import { Postagem } from './../model/Postagem';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { UsuarioService } from '../service/usuario.service';
import { UserLogin } from '../model/UserLogin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  tema: Tema = new Tema()
  listaTema: Tema[]
  idTema: number

  usuario: Usuario = new Usuario()
  idUser = environment.id

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(){

    if(environment.token == ''){
      environment.token = ''
      this.router.navigate(['/login'])
    }else{
    this.temaService.refreshToken()
    this.getAllTemas()
    this.getAllPostagem()
    this.findByUser()
    }
  }

  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTema = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }

  getAllPostagem(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=>{
      this.temaService.refreshToken()
      this.listaPostagens = resp

    })
  }

  findByUser(){
    this.usuarioService.getByIdUser(this.idUser).subscribe((resp: Usuario)=>{
      this.temaService.refreshToken()
      this.usuario = resp
    })
  }

  publicar(){

    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.usuario.id = this.usuario.id
    this.postagem.usuario = this.usuario
  
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp
      this.getAllPostagem()
    })
  }

}
