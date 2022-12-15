import { Pipe, PipeTransform } from '@angular/core';
import { Acao } from './acoes';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(lista: Acao[], valor?:string): Acao[]{
   const nome = valor ?valor:"";
   return lista.filter(
    (acao) => acao.nome.toLocaleLowerCase().includes(nome.toLocaleLowerCase()))
  }

}
