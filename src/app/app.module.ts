// Decorador

import { NgModule } from '@angular/core';

// Módulos

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// necesario para que los servicios de Angular puedan usar http
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Componentes

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { NumberConverterComponent } from './number-converter/number-converter.component';
import { NumberConverterWithServiceComponent } from './number-converter-with-service/number-converter-with-service.component';
import { UtilitiesComponent } from './utilities-component/utilities.component';
import { List1Component } from './list1/list1.component';
import { List2Component } from './list2/list2.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ListaPedidoComponent } from './lista-pedido/lista-pedido.component';

// Servicios

import { ConversorService } from './services/conversor.service';
import { UtilitiesService } from './services/utilities.service';
import { CamareroService } from './services/camarero.service';
import { ProductoService } from './services/producto.service';
 
// Pipe

import { CuentaLetrasPipe } from './pipes/cuenta-letras.pipe';
import { CompruebaSignoNumeroPipe } from './pipes/comprueba-signo-numero.pipe';
import { CompruebaTrimestrePipe } from './pipes/comprueba-trimestre.pipe';
import { CuentaPalabrasPipe } from './pipes/cuenta-palabras.pipe';
import { ConvierteNumerosPipe } from './pipes/convierte-numeros.pipe';
import { PintaAsteriscosPipe } from './pipes/pinta-astericos.pipe';
import { ListaCamareroComponent } from './lista-camarero/lista-camarero.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { PedidoService } from './services/pedido.service';
import { AltaCamareroComponent } from './alta-camarero/alta-camarero.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    CurrencyConverterComponent,
    NumberConverterComponent,
    NumberConverterWithServiceComponent,
    UtilitiesComponent,
    List1Component,
    List2Component,
    PipeDemoComponent,
    CuentaLetrasPipe,
    CompruebaSignoNumeroPipe,
    CompruebaTrimestrePipe,
    CuentaPalabrasPipe,
    ConvierteNumerosPipe,
    PintaAsteriscosPipe,
    ListaCamareroComponent,
    ListaProductosComponent,
    ListaPedidoComponent,
    AltaCamareroComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule, AppRoutingModule
  ],
  providers: [ConversorService, UtilitiesService, CamareroService, ProductoService, PedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
