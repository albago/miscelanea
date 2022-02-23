import { Injectable } from '@angular/core';

@Injectable()
export class DatosService {

  public datodelServicio: string = 'Hola soy la variable!!!!!';
  constructor() { }

  cambiaMensaje(mensaje: string) {
    this.datodelServicio = mensaje;
  }
}
