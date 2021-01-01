import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-pesquisa',
  templateUrl: './clientes-pesquisa.component.html',
  styleUrls: ['./clientes-pesquisa.component.css']
})
export class ClientesPesquisaComponent {

  clientes = [
    { nome: 'Eduardo Ordônio', endereco: 'Rua Taquarytinga, 600', bairro: 'Mooca',
      cidade: 'São Paulo', estado: 'SP', dataInclusao: new Date(2020, 5, 2), status: true },
    { nome: 'Pedro Lerma', endereco: 'Rua Petroviski, 24', bairro: 'Jaguaribe',
      cidade: 'Osasco', estado: 'SP', dataInclusao: new Date(2020, 4, 2), status: true },
    { nome: 'Ewerton Ordônio', endereco: 'Rua Roma, 48', bairro: 'Lapa',
      cidade: 'Osasco', estado: 'SP', dataInclusao: new Date(2020, 4, 2), status: true },
    { nome: 'Fernando Lerma', endereco: 'Rua Teste, 100', bairro: 'Montanhão',
      cidade: 'São Bernardo do Campo', estado: 'SP', dataInclusao: new Date(2020, 2, 15), status: true },
      { nome: 'Eduardo Ordônio', endereco: 'Rua Taquarytinga, 600', bairro: 'Mooca',
      cidade: 'São Paulo', estado: 'SP', dataInclusao: new Date(2020, 5, 2), status: true },
    { nome: 'Pedro Lerma', endereco: 'Rua Petroviski, 24', bairro: 'Jaguaribe',
      cidade: 'Osasco', estado: 'SP', dataInclusao: new Date(2020, 4, 2), status: true },
    { nome: 'Ewerton Ordônio', endereco: 'Rua Roma, 48', bairro: 'Lapa',
      cidade: 'Osasco', estado: 'SP', dataInclusao: new Date(2020, 4, 2), status: true },
    { nome: 'Fernando Lerma', endereco: 'Rua Teste, 100', bairro: 'Montanhão',
      cidade: 'São Bernardo do Campo', estado: 'SP', dataInclusao: new Date(2020, 2, 15), status: true }
  ];

}
