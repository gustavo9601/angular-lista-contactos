import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    let finalString = '';
    // Corta la cadena
    for (let str of value.split(' ')) {
      // Convierte la primer letra en masyucula
      finalString += str.charAt(0).toUpperCase() + str.slice(1) + ' ';
    }

    return finalString;
  }

}
