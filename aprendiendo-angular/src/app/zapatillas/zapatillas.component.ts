import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';


@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit {
  public titulo: string;
  public zapatillas: Array<Zapatilla>;
  public marcas: string[];
  public color: string;
  public miMarca: string;

  constructor() {
    this.titulo = 'Componente de Zapatillas';
    this.color = 'blue';
    this.marcas = new Array;
    this.zapatillas = [
      new Zapatilla('Nike Airmax', 40, 'Nike', 'Rojas', true),
      new Zapatilla('Reebok Classic', 80, 'Reebok', 'Blanco', true),
      new Zapatilla('Reebok Spartan', 180, 'Reebok', 'Negras', true),
      new Zapatilla('Nike Runner MD', 60, 'Nike', 'Negras', true),
      new Zapatilla('Adidas Yeezy', 180, 'Adidas', 'Gris', false)
    ];
  }

  ngOnInit() {
    console.log(this.zapatillas);

    this.getMarcas();
  }

  getMarcas() {
    this.zapatillas.forEach((zapatilla, index) => {
      if (this.marcas.indexOf(zapatilla.marca) < 0) {
        this.marcas.push(zapatilla.marca);
      }
    });

    console.log(this.marcas);
  }

  getMarca() {
    alert(this.miMarca);
  }

  addMarca() {
    this.marcas.push(this.miMarca);
  }

  deleteMarca(index) {
    // delete this.marcas[index];
    this.marcas.splice(index, 1);
  }

  onBlur() {
    console.log('Has salido del input');
  }

  showPalabras() {
    alert(this.miMarca);
  }
}
