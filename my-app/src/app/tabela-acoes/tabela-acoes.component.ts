import { Component, OnInit, Input} from '@angular/core';
import { Acao } from '../acoes';
import { AcaoApiService } from '../acoes-api.service';
import { AcoesService } from '../acoes.service';

@Component({
  selector: 'app-tabela-acoes',
  templateUrl: './tabela-acoes.component.html',
  styleUrls: ['./tabela-acoes.component.css']
})

export class TabelaAcoesComponent implements OnInit {

  //@Input() 
  titulo = "Tabela de Ações";
  empresapesquisada=""
  //@Input() 
  lista: Acao[] = []
  
  constructor(private servico:AcaoApiService) {
    this.listar()
   }
   listar (){
    this.servico.listar().subscribe(
      (data) => {
        this.lista=data
      }
    )
   }

  ngOnInit(): void {
  }

}