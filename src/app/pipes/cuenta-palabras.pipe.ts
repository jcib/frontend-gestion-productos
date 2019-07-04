import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "cuentaPalabras"
})

export class CuentaPalabrasPipe implements PipeTransform {

    transform(value: string) {

        var numeroPalabras:number = 1; // Lo inicializamos a uno porque, obviamente, antes de la primera palabra no hay un espacio.
       
        for(var i = 0; i < value.length; i++) {
            if(value.charAt(i) == ' ') numeroPalabras++;
        }

        return numeroPalabras;
    
    }
    
}