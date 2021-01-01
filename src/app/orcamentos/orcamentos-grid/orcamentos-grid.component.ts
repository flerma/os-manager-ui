import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-orcamentos-grid',
  templateUrl: './orcamentos-grid.component.html',
  styleUrls: ['./orcamentos-grid.component.css']
})
export class OrcamentosGridComponent {

  @Input() orcamentos: any;

}
