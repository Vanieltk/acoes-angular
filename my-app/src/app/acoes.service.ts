import { Injectable } from '@angular/core';
import { Acao } from './acoes';
import { Setor } from './setores';

@Injectable({
  providedIn: 'root'
})

export class AcoesService {
  lista: Acao[] = [
    {_id:1, nome:"Produto 1", codigo: '20', setorid:"marca1", },
    {_id:2, nome:"Produto 2", codigo: '30', setorid:"marca1", },
    {_id:3, nome:"Produto 3", codigo: '40', setorid:"marca1", },
    {_id:4, nome:"Produto 4", codigo: '50', setorid:"marca1", },
    {_id:5, nome:"Produto 5", codigo: '60', setorid:"marca1", },
  ]
  lista2 : Setor[] = [
    {_id:1, setor:"setor1",}
  ]

  constructor() { }

    addAcao(acao: Acao) {
    alert(acao.nome+ " cadastrado com sucesso!")
    this.lista.push(acao);
  }
    addSetor(setor : Setor){
      alert(setor.setor+ "Cadastrado com Sucesso!")
      this.lista2.push(setor)
    }
    

    getAcoes (){
      return this.lista
  }

}
