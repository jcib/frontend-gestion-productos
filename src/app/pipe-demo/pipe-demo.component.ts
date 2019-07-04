import { Component, OnInit } from '@angular/core';
import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})



export class PipeDemoComponent implements OnInit {
  
  aleatorio = function(){
    return Math.floor(Math.random() * 6) + 1;
  }

  nombre = "Pepín Gálvez Ridruejo";
  numero = 89;
  fecha = new Date();
  mes = "Marzo";
  numeroAst1 = this.aleatorio();
  numeroAst2 = this.aleatorio();

  constructor() { }

  ngOnInit() {
  }

}
