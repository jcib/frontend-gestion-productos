import { Injectable }           from '@angular/core';

import { Pedido }               from '../model/pedido';
import { Observable }           from 'rxjs';
import { HttpClient }           from '@angular/common/http';

@Injectable()
export class PedidoService {

    URL = "http://pedi-gest.herokuapp.com/api/pedidos";

    constructor(private http:HttpClient){
    }

    getAll(): Observable<Pedido>{
        return this.http.get<Pedido>(this.URL);
    }


    getById(id:number): Observable<Pedido>{
        return this.http.get<Pedido>(this.URL + "/" + id);
    }

}