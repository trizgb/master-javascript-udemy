import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform {

  // dato | calculadora: otroDato
  // param1               param2
  transform(value: any, value2: any) {
    let operations = `
      Suma: ${value + value2} //
      Resta: ${value - value2} //
      Multiplicación: ${value * value2} //
      División: ${value / value2}
    `;

    return operations;
  }
}
