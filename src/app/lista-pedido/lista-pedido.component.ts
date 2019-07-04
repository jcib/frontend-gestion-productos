import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../services/pedido.service';

// npm install bootstrap jquery popper


@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.component.html',
  styleUrls: ['./lista-pedido.component.css']
})
export class ListaPedidoComponent implements OnInit {

  pedidos;

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(){

    this.pedidoService.getAll().subscribe( datos => {
      this.pedidos = datos;
    });
  }

}
