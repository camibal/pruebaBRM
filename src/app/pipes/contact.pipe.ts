import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class ContactPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '') return value;
    const resultado = [];
    for (const post of value) {
      if (post.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1 || post.correo.toLowerCase().indexOf(arg.toLowerCase()) > -1 || post.telefono.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultado.push(post);
      };
    };
    return resultado;
  }

}
