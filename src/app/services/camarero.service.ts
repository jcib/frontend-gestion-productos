import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Camarero } from '../model/camarero';

@Injectable()
export class CamareroService{

    //Todos nuestros request desde este servicio comenzarán con...
 //   URL = "https://pedi-gest.herokuapp.com/api/camareros";

    URL = "http://pedi-gest.herokuapp.com/api/camareros";  


    // Ahora necesitamos inyectar en este servicio un "aparatito" necesario
    // para llevar a cabo los request...
    // Este "aparatito" nos va a llegar gracias a haber incluido HttpClientModule
    // en el módulo raíz.

    // Aquí no hay @Autowired... la inyección se hace en el constructor.

    public constructor(private http: HttpClient){

    }

    // Creamos métodos públicos que tendrá mi servicio

    getAll():Observable<Camarero>{

        // Cómo hacer un request? Qué necesito?
        return this.http.get<Camarero>(this.URL);
    }

    // Va a ser Observable porque el servidor siempre devuelve algo
    create(camarero:Camarero):Observable<Camarero>{

        // Tengo URL
        // Tengo Camarero
        // También necesito enviar un header

        // "content-type": "application/json"

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })

        };

        return this.http.post<Camarero>(this.URL,camarero,httpOptions);

    }

}