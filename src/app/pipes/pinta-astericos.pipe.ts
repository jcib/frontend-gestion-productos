import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "pintaAsteriscos"
})

export class PintaAsteriscosPipe implements PipeTransform {

    transform(value: number) {

        var asteriscos:string = "";

        for(var i = 0; i < value; i++) {
            asteriscos+='*';
        }

        return asteriscos;
    
    }
    
}