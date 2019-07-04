import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.css']
})
export class List2Component implements OnInit {

  nuevoNombre:string = undefined;

  nombres:string [] = ["Pepín Gálvez Ridruejo",
  "Honorio Martín Salvador",
  "Carlota Ramos Cifuentes",
  "Marta Galán Travería"];

  constructor() { }

  ngOnInit() {
  }

  addName = function() {
    this.nombres.push(this.nuevoNombre);
    this.nuevoNombre = undefined;
  }

  eraseName = function() {
    this.nombres.pop();
  }

}
