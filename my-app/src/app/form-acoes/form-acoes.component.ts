import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Acao } from '../acoes';
import { AcoesService } from '../acoes.service';

@Component({
  selector: 'form-acoes',
  templateUrl: './form-acoes.component.html',
  styleUrls: ['./form-acoes.component.css']
})
export class FormAcoesComponent implements OnInit{

  acao = new Acao()
  //@Output() onSalvar = new EventEmitter<any>()

  constructor(
    private servico: AcoesService,
    private router : Router
  ){}

  ngOnInit(): void {
  }

  cadastrar() {
    //this.onSalvar.emit(this.acao);
    this.servico.addAcao(this.acao)
    this.acao = new Acao()

  }
  cancelar(){
    this.router.navigate(['/tabela'])
  }

}

