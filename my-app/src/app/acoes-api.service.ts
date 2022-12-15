import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acao } from './acoes';
import { Setor } from './setores';

const httpOptions = { 
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class AcaoApiService {

  baseAPI = "http://localhost:3001/";

  constructor(private http: HttpClient) { }

  listar(): Observable<Acao[]> {
    return this.http.get<Acao[]>(this.baseAPI);
  }

  inserir(Acao: Acao): Observable<Acao> {
    return this.http.post<Acao>(this.baseAPI, Acao, httpOptions);
  }

  inserirsetores(Setor: Setor): Observable<Setor> {
    const uri = `${this.baseAPI}/setor`
    return this.http.post<Setor>(uri, Setor, httpOptions);
  }


  // deletar(id: number){
  //   const uri = `${this.baseAPI}/${id}`;//baseAPI + "/"+ id;
  //   return this.http.delete(uri);
  // }
}