import { Component, OnInit } from '@angular/core';
import { CamareroService } from '../services/camarero.service';
import { Observable } from 'rxjs';
import { Camarero } from '../model/camarero';


@Component({
  selector: 'app-lista-camarero',
  templateUrl: './lista-camarero.component.html',
  styleUrls: ['./lista-camarero.component.css']
})
export class ListaCamareroComponent implements OnInit {

  camareros;

  constructor(private camareroService: CamareroService) { }

  ngOnInit() {

    // 1.- vamos a subscribirnos al observable que me devuelve el método getAll()
    // 2.- cuando lleguen los datos (llámale x) los asignamos a la variable camareros de arriba.

    this.camareroService.getAll().subscribe(x => {
      this.camareros = x;
    });

  }

}
