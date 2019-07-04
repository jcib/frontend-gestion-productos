import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';
import { ListaCamareroComponent }       from './lista-camarero/lista-camarero.component';
import { ListaProductosComponent }      from './lista-productos/lista-productos.component';
import { NumberConverterComponent }     from './number-converter/number-converter.component';
import { List1Component } from './list1/list1.component';
import { ListaPedidoComponent } from './lista-pedido/lista-pedido.component';
import { AltaCamareroComponent } from './alta-camarero/alta-camarero.component';

// Voy a crear una constante que será un array con las rutas

const routes: Routes = [

    {path: '', component: List1Component},
    {path: 'camarerolist', component: ListaCamareroComponent},
    {path: 'productolist', component: ListaProductosComponent},
    {path: 'pedidolist', component: ListaPedidoComponent},
    {path: 'numberconverter', component: NumberConverterComponent},
    {path: 'altacamarero', component: AltaCamareroComponent }

];


@NgModule({
    imports: [RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}