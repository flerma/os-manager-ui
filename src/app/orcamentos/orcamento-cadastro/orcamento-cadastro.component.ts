import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orcamento-cadastro',
  templateUrl: './orcamento-cadastro.component.html',
  styleUrls: ['./orcamento-cadastro.component.css']
})
export class OrcamentoCadastroComponent implements OnInit {

  cliente: string;
  tipoServico: string;
  statusOrcamento: string;
  dataAgendamento: string;
  dataExecucao: string;
  descricao: string;
  valor: string;

  tiposServico = [
    {label: 'Manutenção', value: 1},
    {label: 'Garantia', value: 2}
  ];

  listaStatusOrcamento = [
    {label: 'SOLICITADO', value: 1},
    {label: 'FINALIZADO', value: 2}
  ];

  clientes = [
    {label: 'Eduardo Ordônio', value: 1},
    {label: 'Ewerton Ordônio', value: 2},
    {label: 'Pedro Dephaye', value: 3}
  ];

  salvar(form: NgForm) {
    console.log(form);

    form.reset({ cliente: '', tiposServico: '', statusOrcamento: '',
                dataAgendamento: '', dataExecucao: '', descricao: '',
                valor: ''});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
