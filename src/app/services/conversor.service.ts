import { Injectable } from '@angular/core';


@Injectable()
export class ConversorService {
    
    cdu(strNumero: string):string {	

        let strResultado = "";
        let unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete","ocho", "nueve"];
        let decenas =  ["","","","treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"];
        let centenas = ["","ciento","doscientos","trescientos","cuatrocientos","quinientos","seiscientos", "setecientos","ochocientos","novecientos"];
        let exepcion = ["diez","once","doce","trece","catorce","quince","dieciséis","diecisiete", "dieciocho","diecinueve","veinte","veintiuno","veintidós","veintitrés","veinticuatro","veinticinco","veintiséis","veintisiete","veintiocho","veintinueve"];
  
        let numero = parseInt(strNumero);       // necesitamos el número en versión número entero
        let ncifras = strNumero.length;         // necesitamos conocer el número de cifras
  
        if (numero == 100) return "cien";       // no hace falta mirar nada más...
  
        let strUnidades = unidades[parseInt(strNumero.substring(ncifras - 1))];
  
        if (numero < 10) return strUnidades;
  
        let du = parseInt(strNumero.substring(ncifras - 2));
  
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