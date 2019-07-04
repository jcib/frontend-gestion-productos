import { Component } from '@angular/core';

@Component({
  selector: 'app-number-converter',
  templateUrl: './number-converter.component.html',
  styleUrls: ['./number-converter.component.css']
})
export class NumberConverterComponent {

  numero = 1;
  texto = "uno";

  convertir = function(){
    console.log(this.numero);
    if (this.numero !== "" ) {
      if (this.numero > 999) {
        this.texto = "ERROR! sólo funciona con múmeros entre [0..999]";
      } else {
        this.texto = this.cdu(String(this.numero));
      }
      
    } else {
      this.texto = "";
      console.log(this.numero + " es null o undefined");
    }
  }

  private cdu = function (strNumero: string):string {	// esperamos recibir un string...

    let strResultado = "";
    let unidades = ["", "un", "dos", "tres", "cuatro", "cinco", "seis", "siete","ocho", "nueve"];
    let decenas =  ["","","","treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"];
    let centenas = ["","ciento","doscientos","trescientos","cuatrocientos","quinientos","seiscientos", "setecientos","ochocientos","novecientos"];
    let exepcion = ["diez","once","doce","trece","catorce","quince","dieciséis","diecisiete", "dieciocho","diecinueve","veinte","veintiuno","veintidós","veintitrés","veinticuatro","veinticinco","veintiséis","veintisiete","veintiocho","veintinueve"];
  
    let numero = parseInt(strNumero);       // necesitamos el número en versión número entero
    let ncifras = strNumero.length;         // necesitamos conocer el número de cifras
  
    if (numero == 100) return "cien";       // no hace falta mirar nada más...
  
    let strUnidades = unidades[parseInt(strNumero.substring(ncifras - 1))];
  
    if (numero < 10) return strUnidades;
  
    let du = parseInt(this.numero.substring(ncifras - 2));
  
    if (du > 9 && du < 30) {
      strResultado = exepcion[du-10];
    } else {
      let strDecenas = decenas[parseInt(strNumero.substring(ncifras-2,ncifras-1))];
      strResultado = strDecenas + (((strDecenas == "") || (strUnidades == "") ) ? "" : " y ") + strUnidades;
    }
  
    if (numero>100) { strResultado = centenas[parseInt(strNumero.substring(0, 1))]+ " " + strResultado; }
    
    return strResultado;     
  }

}
