import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  tamanoletra: number = 50;
  parametroruta: any;
  
  constructor(private activatedRoute: ActivatedRoute, public datosService: DatosService) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        console.log(params);
        this.parametroruta = params['id'];  
      });
  }

}
