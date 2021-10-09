import { Component, OnInit, ViewChild} from '@angular/core';
import {Modelo} from '../modelo';
import {UsuarioService} from '../usuario.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

  usuarios: Modelo[] = [];
  totalUsuarios: number;
  page = 1;

  constructor(private usuarioService: UsuarioService) {


  }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void{
    this.usuarioService.getUsuarios()
    .subscribe(usuarios => {
      this.usuarios = usuarios
      this.totalUsuarios = usuarios.length
    });
  }

  //Eliminar un usuario
  delete(usuario: Modelo):void{
    if(window.confirm("You are about to delete this record, this action is irreversible"))
    {
    this.usuarios = this.usuarios.filter(u => u !== usuario);
    this.usuarioService.deleteUsuario(usuario).subscribe();
    }
  }



}
