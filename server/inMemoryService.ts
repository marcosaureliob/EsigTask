import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: 1, title: 'Tarefa 1',responsible:'João', actions:'editar | excluir | concluir' },
      { id: 2, title: 'Tarefa 2',responsible:'Antonio', actions:'editar | excluir | concluir' },
      { id: 3, title: 'Tarefa 3',responsible:'José', actions:'editar | excluir | concluir' },
    ];

    return { products };
  }
}
