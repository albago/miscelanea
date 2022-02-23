import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent implements OnInit {

  @Input() mensajedelpadre!: string;
  @Output() respuestadelhijo: EventEmitter<string> = new EventEmitter<string>();
  constructor(public datosService: DatosService) { }

  ngOnInit(): void {
  }

  responderalpadre() {
    this.respuestadelhijo.emit('Hola padre!!!');
  }

}
