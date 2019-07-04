import { Component } from '@angular/core';

@Component({
    selector: 'contador',
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.css']
  })

export class ContadorComponent {

    numero:number = 0;

    incrementar = function(){

        this.numero++;

    }

    decrementar = function(){

        this.numero--;

    }

    reset = function(){

        this.numero = 0;

    }

}