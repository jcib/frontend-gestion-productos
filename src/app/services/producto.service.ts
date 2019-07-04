import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../model/producto';
import { Observable } from 'rxjs';



@Injectable()
export class ProductoService{

    URL = "http://pedi-gest.herokuapp.com/api/productos";


    constructor(private http: HttpClient){

    }

    getAll(): Observable<Producto>{

        var observable = this.http.get<Producto>(this.URL);

        return observable;
    }


}