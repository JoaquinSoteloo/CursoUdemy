import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public titulo : string;

  constructor() {
    this.titulo = "Componente peliculas"
    console.log("Constructor lanzado")
   }

  ngOnInit(): void {
    console.log("Componente iniciado!")
  }

  ngDoCheck(){
    console.log("DOCHECK LANZADO")
  }

  cambiarTitulo() {
    this.titulo = "Cambie el titulo";
  }

  ngOnDestroy(){
    console.log("El componente se va a eliminar!!")
  }

}
