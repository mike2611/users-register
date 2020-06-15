import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Modelo} from '../modelo';
import {UsuarioService} from '../usuario.service';

@Component({
  selector: 'app-user-resumen',
  templateUrl: './user-resumen.component.html',
  styleUrls: ['./user-resumen.component.css']
})
export class UserResumenComponent implements OnInit {
 @Input()usuario : Modelo = {} as Modelo;
  id : number = 0;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {
    if(+this.route.snapshot.paramMap.get('id') > 0)
      this.id = +this.route.snapshot.paramMap.get('id');
    else
      this.setIdUsuario();
    }

  ngOnInit(): void {  
      this.getUsuario();
  }


  getUsuario(): void{
    this.usuarioService.getUsuario(this.id)
    .subscribe(usuario => this.usuario = usuario);
  }

  setIdUsuario(): void { //Crea el id para usuarios nuevos, ya que no lo puede obtener de la URL
    this.id = +this.usuarioService.getUsuarios().subscribe.length + 100;

  }


}
