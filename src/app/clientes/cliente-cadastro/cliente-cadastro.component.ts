import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {

  nome: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;
  status: string;

  listaStatus = [
    {label: 'Prospecto', value: 1},
    {label: 'Cliente', value: 2}
  ];

  cidades = [
    {label: 'SÃO PAULO', value: 1},
    {label: 'SÃO BERNARDO DO CAMPO', value: 2},
    {label: 'SÃO CAETANO DO SUL', value: 3},
    {label: 'OSASCO', value: 4},
    {label: 'SANTO ANDRÉ', value: 5},
    {label: 'GUARULHOS', value: 6}
  ];

  estados = [
    {label: 'SP', value: 1},
    {label: 'RJ', value: 2},
    {label: 'MG', value: 3}
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
