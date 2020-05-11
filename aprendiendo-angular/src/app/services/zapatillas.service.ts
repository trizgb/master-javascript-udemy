import { Injectable } from "@angular/core";
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillasService {
  public zapatillas: Array<Zapatilla>;

  constructor() {
    this.zapatillas = [
      new Zapatilla('Nike Airmax', 40, 'Nike', 'Rojas', true),
      new Zapatilla('Reebok Classic', 80, 'Reebok', 'Blanco', true),
      new Zapatilla('Reebok Spartan', 180, 'Reebok', 'Negras', true),
      new Zapatilla('Nike Runner MD', 60, 'Nike', 'Negras', true),
      new Zapatilla('Adidas Yeezy', 180, 'Adidas', 'Gris', false)
    ];
  }

  getTexto() {
    return 'Hola mundo desde un servicio';
  }

  getZapatillas(): Array<Zapatilla> {
    return this.zapatillas;
  }
}
