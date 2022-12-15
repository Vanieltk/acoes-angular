import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabelaAcoesComponent } from './tabela-acoes/tabela-acoes.component';
import { FormAcoesComponent } from './form-acoes/form-acoes.component';
import { FiltroPipe } from './filtro.pipe';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormSetorComponent } from './form-setor/form-setor.component';


@NgModule({
  declarations: [
    AppComponent,
    TabelaAcoesComponent,
    FormAcoesComponent,
    FiltroPipe,
    PageNotFoundComponent,
    FormSetorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
