import { OrcamentoCadastroComponent } from './orcamentos/orcamento-cadastro/orcamento-cadastro.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { OrcamentosModule } from './orcamentos/orcamentos.module';
import { ClientesModule } from './clientes/clientes.module';
import { OrcamentosPesquisaComponent } from './orcamentos/orcamentos-pesquisa/orcamentos-pesquisa.component';
import { ClientesPesquisaComponent } from './clientes/clientes-pesquisa/clientes-pesquisa.component';
import { ClienteCadastroComponent } from './clientes/cliente-cadastro/cliente-cadastro.component';

const routes: Routes = [

  { path: 'orcamentos', component: OrcamentosPesquisaComponent },
  { path: 'orcamentos/novo', component: OrcamentoCadastroComponent },
  { path: 'clientes', component: ClientesPesquisaComponent },
  { path: 'clientes/novo', component: ClienteCadastroComponent }

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),

    OrcamentosModule,
    ClientesModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
