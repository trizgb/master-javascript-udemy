import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../../models/zapatilla';
import { ZapatillasService } from '../../services/zapatillas.service';


@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  providers: [
    ZapatillasService
  ]
})

export class ZapatillasComponent implements OnInit {
  public titulo: string;
  public zapatillas: Array<Zapatilla>;
  public marcas: string[];
  public color: string;
  public miMarca: string;

  constructor(
    private _zapatillasService: ZapatillasService
  ) {
    this.titulo = 'Componente de Zapatillas';
    this.color = 'blue';
    this.marcas = new Array;
  }

  ngOnInit() {
    this.zapatillas = this._zapatillasService.getZapatillas();

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
