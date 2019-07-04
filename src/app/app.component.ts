import { Component } from '@angular/core';

/*
@Component es un decorador (en Java se llama anotación)
Hay que importarlo. Mirad arriba...

Al @Component se le suministra un objeto JSON con tres propiedades:
- selector: la forma de incluir el componente dentro de un HTML

Cuando pongamos <app-root></app-root> -> se pintará el componente.

- templateUrl: el archivo que contiene el HTML del componente

- styleUrls: es el array de archivos CSS que tiene nuestro componente
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/* 
El nombre de la clase no puede ser un nombre cualquiera.
El fichero se llama app.component y la clase AppComponent
*/

export class AppComponent {

  
  
}
