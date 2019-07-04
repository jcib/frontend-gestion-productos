import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos;

   constructor(private productoService: ProductoService) { }

  ngOnInit() {

    this.productoService.getAll().subscribe(x => {
      this.productos = x;
    });
  }

}
