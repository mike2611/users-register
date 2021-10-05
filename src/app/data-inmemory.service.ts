import { Injectable } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {Modelo} from './modelo';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})


export class DataInmemoryService implements InMemoryDbService{

  createDb(){
    const usuarios = [
     {id:100,
      tipoUsuario: 'Type1',
      areas: 'Area1',
      estatus: 'Active',
      cliente: 'Customer1',
      elementoEstructura: 'Element1',
      numeroTrabajador: '150034A354B',
      user: 'Jose',
      nombre: 'Jose',
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
        tipoUsuario: 'Type2',
        areas: 'Area1',
        estatus: 'Active',
        cliente: 'Customer1',
        elementoEstructura: 'Element1',
        numeroTrabajador: '184534A354B',
        user: 'Mark',
        nombre: 'Mark ',
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
          tipoUsuario: 'Type1',
          areas: 'Area1',
          estatus: 'Active',
          cliente: 'Customer1',
          elementoEstructura: 'Element1',
          numeroTrabajador: '198034A354H',
          user: 'Greg',
          nombre: 'Greg',
          apellidoPaterno: 'Fernandez',
          apellidoMaterno: 'Martin',
          correoOficina: 'jose@prueba.com',
          telefonoOficina: '8116723392',
          extensionOficina: '52',
          movil1: '8116723393',
          movil2: '8116723394',
          telefonoCasa: '8116723395',
          fechaNacimiento: '1987-11-11'},
          {id:103,
            tipoUsuario: 'Type1',
            areas: 'Area1',
            estatus: 'Active',
            cliente: 'Customer1',
            elementoEstructura: 'Element1',
            numeroTrabajador: '340034A354B',
            user: 'Robert',
            nombre: 'Robert',
            apellidoPaterno: 'Estrella',
            apellidoMaterno: 'Martin',
            correoOficina: 'jose@prueba.com',
            telefonoOficina: '8116723392',
            extensionOficina: '52',
            movil1: '8116723393',
            movil2: '8116723394',
            telefonoCasa: '8116723395',
            fechaNacimiento: '1987-11-11'},
            {id:104,
            tipoUsuario: 'Type1',
            areas: 'Area1',
            estatus: 'Active',
            cliente: 'Customer1',
            elementoEstructura: 'Element1',
            numeroTrabajador: '1150034A35F',
            user: 'Roberto',
            nombre: 'Roberto',
            apellidoPaterno: 'Escobar',
            apellidoMaterno: 'Puentes',
            correoOficina: 'jose@prueba.com',
            telefonoOficina: '8116723392',
            extensionOficina: '52',
            movil1: '8116723393',
            movil2: '8116723394',
            telefonoCasa: '8116723395',
            fechaNacimiento: '1987-11-11'},
            {id:105,
              tipoUsuario: 'Type1',
              areas: 'Area1',
              estatus: 'Active',
              cliente: 'Customer1',
              elementoEstructura: 'Element1',
              numeroTrabajador: '150034A354B',
              user: 'Alberto',
              nombre: 'Alberto',
              apellidoPaterno: 'Silva',
              apellidoMaterno: 'Puentes',
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

