import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaAcoesComponent } from './tabela-acoes/tabela-acoes.component';
import { RouterModule, Routes } from '@angular/router';
import { FormAcoesComponent } from './form-acoes/form-acoes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormSetorComponent } from './form-setor/form-setor.component';

const rotas :Routes = [
  { path:'tabela', component: TabelaAcoesComponent},
  { path:'form', component: FormAcoesComponent},
  { path:'formsetor', component: FormSetorComponent},
  { path:'', redirectTo: '/tabela', pathMatch:'full'},
  { path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rotas)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
