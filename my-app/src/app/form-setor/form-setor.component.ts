import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Setor } from '../setores';
import { AcoesService } from '../acoes.service';

@Component({
  selector: 'app-form-setor',
  templateUrl: './form-setor.component.html',
  styleUrls: ['./form-setor.component.css']
})
export class FormSetorComponent implements OnInit{

  setor = new Setor()
  //@Output() onSalvar = new EventEmitter<any>()

  constructor(
    private servico: AcoesService,
    private router : Router
  ){}

  ngOnInit(): void {
  }

  cadastrar() {
    //this.onSalvar.emit(this.acao);
    this.servico.addSetor(this.setor)
    this.setor = new Setor()

  }
  cancelar(){
    this.router.navigate(['/tabela'])
  }

}
