import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "compruebaSignoNumero"
})

export class CompruebaSignoNumeroPipe implements PipeTransform {

    transform(value: number) {
        var resultado;

        if(value == 0 ) resultado = "Es neutro.";
        else if (value > 0) resultado = "Es positivo.";
        else resultado = "Es negativo.";
        return resultado;
    }
    
}