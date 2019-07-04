import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "compruebaTrimestre"
})

export class CompruebaTrimestrePipe implements PipeTransform {

    transform(value: string) {       
       var listaTrimestres = [["Enero","Febrero","Marzo"],["Abril","Mayo","Junio"],["Julio", "Agosto","Septiembre"],["Octubre","Noviembre","Diciembre"]];
       var trimestre:string; 

        for(var i = 0; i < 4; i++){
           for(var j = 0; j < 3; j++){
               if (value.localeCompare(listaTrimestres[i][j]) == 0) return "T" + (i+1);
           }
       }
    
    }
    
}