import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class OrcamentosService {

  orcamentosUrl: string;

  constructor() {
    this.orcamentosUrl = `${environment.apiUrl}/orcamentos`;
  }
}
