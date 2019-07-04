import { Component, OnInit } from '@angular/core';
import { Camarero } from '../model/camarero';
import { CamareroService } from '../services/camarero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-camarero',
  templateUrl: './alta-camarero.component.html',
  styleUrls: ['./alta-camarero.component.css']
})
export class AltaCamareroComponent implements OnInit {

  camarero:Camarero;

  // El servicio le llega inyectado en el constructor
  constructor(private camareroService: CamareroService, private router:Router) { }

  ngOnInit() {

    this.camarero= new Camarero(undefined,undefined);
    
  }

  create() {
    // 1. Llamamos al método de CamareroService...
    var respuesta = this.camareroService.create(this.camarero);

    respuesta.subscribe(camareroNuevo => {
      //2. Monitorizar por la consola el camarero devuelto por el back-end
      console.log("Se ha creado el camarero " + camareroNuevo.nombre);

      //3. Reinicializar el this.camarero por si queremos crear otro...

      this.camarero = new Camarero(undefined, undefined);

      // 4. Programáticamente cargamos el componente ListaCamareroComponent
    });

  }

}
