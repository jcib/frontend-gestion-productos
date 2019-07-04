import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "cuentaLetras"
})

export class CuentaLetrasPipe implements PipeTransform {

    transform(value: string) {
        return value.length;
    }
    
}