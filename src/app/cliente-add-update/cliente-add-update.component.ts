import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Modelo } from '../modelo';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-cliente-add-update',
  templateUrl: './cliente-add-update.component.html',
  styleUrls: ['./cliente-add-update.component.css']
})
export class ClienteAddUpdateComponent implements OnInit {
  @Input() usuario: Modelo = {} as Modelo;
  titulo: string = 'Add'; // Se define el titulo
  id: number;
  usuarios: Modelo[] = [];
  updatedUser: boolean = true;


  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private location: Location
  ) {
    this.id = +this.route.snapshot.paramMap.get('id'); // se obtiene el valor id de la url
  }


  ngOnInit(): void {
    if(this.id > 0){
      this.getUsuario();
    }
  }

  getUsuario(): void {
    this.usuarioService.getUsuario(this.id)
      .subscribe(usuario => this.usuario = usuario);
    this.titulo = 'Update'; // Se modifica el titulo
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.id > 0) {
      this.usuarioService.updateUsuario(this.usuario)
        .subscribe();
    }
    else {
      this.usuarioService.addUsuario(this.usuario)
        .subscribe();
    }
  }





}
