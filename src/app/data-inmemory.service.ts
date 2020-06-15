import { Injectable } from '@angular/core';
import {Modelo} from './modelo';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataInmemoryService implements InMemoryDbService{

  createDb(){
    const usuarios = [
     {id:100,
      tipoUsuario: 'Tipo1',
      areas: 'Area1',
      estatus: 'Activo',
      cliente: 'Cliente1',
      elementoEstructura: 'Elemento1',
      numeroTrabajador: '150034A',
      user: 'Jose',
      nombre: 'Jose Angel',
      apellidoPaterno: 'Juarez',
      apellidoMaterno: 'Flores',
      correoOficina: 'jose@prueba.com',
      telefonoOficina: '8116723392',
      extensionOficina: '52',
      movil1: '8116723393',
      movil2: '8116723394',
      telefonoCasa: '8116723395',
      fechaNacimiento: '1987-11-11'},
      {id:101,
        tipoUsuario: 'Tipo2',
        areas: 'Area1',
        estatus: 'Activo',
        cliente: 'Cliente1',
        elementoEstructura: 'Elemento1',
        numeroTrabajador: '186934B',
        user: 'Pablo',
        nombre: 'Pablo ',
        apellidoPaterno: 'Torres',
        apellidoMaterno: 'Rodriguez',
        correoOficina: 'jose@prueba.com',
        telefonoOficina: '8116723392',
        extensionOficina: '52',
        movil1: '8116723393',
        movil2: '8116723394',
        telefonoCasa: '8116723395',
        fechaNacimiento: '1987-11-11'},
        {id:102,
          tipoUsuario: 'Tipo1',
          areas: 'Area1',
          estatus: 'Activo',
          cliente: 'Cliente1',
          elementoEstructura: 'Elemento1',
          numeroTrabajador: '198420F',
          user: 'Pancho',
          nombre: 'Pancho',
          apellidoPaterno: 'Fernandez',
          apellidoMaterno: 'Martin',
          correoOficina: 'jose@prueba.com',
          telefonoOficina: '8116723392',
          extensionOficina: '52',
          movil1: '8116723393',
          movil2: '8116723394',
          telefonoCasa: '8116723395',
          fechaNacimiento: '1987-11-11'}
    ];
    return {usuarios};
  }

  genId(usuarios: Modelo[]): number{
    return usuarios.length > 0 ? Math.max(...usuarios.map(usuarios => usuarios.id)) + 1 : 100;
  }

}
