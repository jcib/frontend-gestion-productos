import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent  {

  tabla = {
    euro: 1,
    francoSuizo: 1.1,
    coronaSueca: 1.2,
    dolar: 1.13
  }

  // convertir de monedaA a monedaB

  importe1 = 1.0;
  importe2 = 1.0;

  divisa1 = "euro";
  divisa2 = "euro";

  cambia1 = function(){
    this.importe2 = (this.importe1 / this.tabla[this.divisa1]) 
     * this.tabla[this.divisa2];
  }

  cambia2 = function(){
    this.importe1 = (this.importe2 / this.tabla[this.divisa2]) 
    * this.tabla[this.divisa1];
  }
}