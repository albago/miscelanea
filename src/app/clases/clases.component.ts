import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
  ]
})
export class ClasesComponent implements OnInit {

  alerta: string = 'alert-primary'

  aplicarClase: boolean = true;

  propiedades = {
    danger: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
