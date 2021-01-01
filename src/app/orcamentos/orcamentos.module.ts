import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { InputMaskModule } from 'primeng/inputmask';

import { SharedModule } from './../shared/shared.module';
import { OrcamentosGridComponent } from './orcamentos-grid/orcamentos-grid.component';
import { OrcamentosPesquisaComponent } from './orcamentos-pesquisa/orcamentos-pesquisa.component';
import { OrcamentoCadastroComponent } from './orcamento-cadastro/orcamento-cadastro.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    OrcamentosPesquisaComponent,
    OrcamentoCadastroComponent,
    OrcamentosGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    CalendarModule,
    DropdownModule,
    CurrencyMaskModule,
    InputMaskModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    OrcamentosPesquisaComponent,
    OrcamentoCadastroComponent
  ]
})
export class OrcamentosModule { }
