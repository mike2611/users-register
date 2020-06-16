import { Component, OnInit} from '@angular/core';
import {Modelo} from '../modelo';
import {UsuarioService} from '../usuario.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

  usuarios: Modelo[] = [];
  

  constructor(private usuarioService: UsuarioService) { }
 
  ngOnInit(): void {
    this.getUsuarios();
  }

   
  getUsuarios(): void{
    this.usuarioService.getUsuarios()
    .subscribe(usuarios => this.usuarios = usuarios);
  }
  
  //Eliminar un usuario
  delete(usuario: Modelo):void{
    this.usuarios = this.usuarios.filter(u => u !== usuario);
    this.usuarioService.deleteUsuario(usuario).subscribe();
  }



}
