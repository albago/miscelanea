import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styles: [
  ]
})
export class PadreComponent implements OnInit {

  mensajealhijo!: string;
  mensajedelhijo!: string;

  constructor(public datosService: DatosService) { }

  ngOnInit(): void {
  }

  saludarahijo() {
    this.mensajealhijo = 'Hola hijo!!'
  }

  recibirrespuestahijo(evento: string){
    this.mensajedelhijo = evento;
  }

}
