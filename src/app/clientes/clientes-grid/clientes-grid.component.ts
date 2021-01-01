import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clientes-grid',
  templateUrl: './clientes-grid.component.html',
  styleUrls: ['./clientes-grid.component.css']
})
export class ClientesGridComponent {

  @Input() clientes: any;

}
