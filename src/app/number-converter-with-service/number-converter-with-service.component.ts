import { Component }                  from '@angular/core';
import { ConversorService }           from '../services/conversor.service';


@Component({
  selector: 'app-number-converter-with-service',
  templateUrl: './number-converter-with-service.component.html',
  styleUrls: ['./number-converter-with-service.component.css']
})
export class NumberConverterWithServiceComponent {

  constructor(private conversorService: ConversorService) { } //Inyectamos el servicio

  // variables de instancia del componente
  numero = 1;
  texto = "uno";

  // Esta vez utilizamos un servicio que encapsula la lógica

  convertir = function(){
    
    if (this.numero !== "" ) {

      if (this.numero > 999) {

        this.texto = "ERROR! sólo funciona con múmeros entre [0..999]";

      } else {
        
        this.texto = this.conversorService.cdu(this.numero);
      }
      
    } else {
      this.texto = "";
      
    }
  }

}
