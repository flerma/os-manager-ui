import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orcamentos-pesquisa',
  templateUrl: './orcamentos-pesquisa.component.html',
  styleUrls: ['./orcamentos-pesquisa.component.css']
})
export class OrcamentosPesquisaComponent {

  orcamentos = [
    { tipoServico: 'MANUTENCAO', dataAgendamento: new Date(2020, 5, 1),
      dataExecucao: new Date(2020, 5, 2), valor: 1080.65, nomeCliente: 'EDUARDO ORDONIO' },
    { tipoServico: 'MANUTENCAO', dataAgendamento: new Date(2020, 5, 1),
      dataExecucao: new Date(2020, 5, 2), valor: 1080.65, nomeCliente: 'EDUARDO ORDONIO' },
    { tipoServico: 'MANUTENCAO', dataAgendamento: new Date(2020, 5, 1),
      dataExecucao: new Date(2020, 5, 2), valor: 1080.65, nomeCliente: 'EDUARDO ORDONIO' },
    { tipoServico: 'MANUTENCAO', dataAgendamento: new Date(2020, 5, 1),
      dataExecucao: new Date(2020, 5, 2), valor: 1080.65, nomeCliente: 'EDUARDO ORDONIO' },
    { tipoServico: 'MANUTENCAO', dataAgendamento: new Date(2020, 5, 1),
      dataExecucao: new Date(2020, 5, 2), valor: 1080.65, nomeCliente: 'EDUARDO ORDONIO' },
    { tipoServico: 'MANUTENCAO', dataAgendamento: new Date(2020, 5, 1),
      dataExecucao: new Date(2020, 5, 2), valor: 1080.65, nomeCliente: 'EDUARDO ORDONIO' },
    { tipoServico: 'MANUTENCAO', dataAgendamento: new Date(2020, 5, 1),
      dataExecucao: new Date(2020, 5, 2), valor: 1080.65, nomeCliente: 'EDUARDO ORDONIO' }
  ];

}
