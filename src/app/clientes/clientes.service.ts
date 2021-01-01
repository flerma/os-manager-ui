import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class ClientesService {

  clientesUrl: string;

  constructor() {
    this.clientesUrl = `${environment.apiUrl}/clientes`
  }
}
