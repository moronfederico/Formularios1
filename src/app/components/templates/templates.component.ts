import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styles: [`
        .ng-invalid.ng-touched:not(form) {
          border: 1px solid red;
        }
      `

  ]
})
export class TemplatesComponent {

  usuario:Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "Hombre",
    acepta: false

  }

  paises = [{
    codigo: "CRI",
    nombre: "Costa Rica"
  },
  {
  codigo: "ESP",
  nombre: "España"
  }]

  sexos: string[] = ["Hombre", "Mujer"]

  constructor() { }

  guardar(forma:NgForm){
    
    console.log( "ngForm", forma);
    console.log( "Valor forma", forma.value);

    console.log( "Usuario", this.usuario);
  }

}
