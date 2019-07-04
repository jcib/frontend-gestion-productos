import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.css']
})
export class List1Component implements OnInit {

  nombres:string [] = ["Pepín Gálvez Ridruejo",
                      "Honorio Martín Salvador",
                      "Carlota Ramos Cifuentes",
                      "Marta Galán Travería"];

  constructor() { }

  ngOnInit() {
  }

}
