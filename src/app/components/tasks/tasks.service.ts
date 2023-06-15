import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly API = 'http://localhost:3000/tasks'
  constructor(private http: HttpClient) { }
  listar(): Observable<Task[]>{
    return this.http.get<Task[]>(this.API)
  }
  criar(tasks: Task): Observable<Task> {
    return this.http.post<Task>(this.API, tasks)
  }

  editar(tasks: Task): Observable<Task> {
    const url = `${this.API}/${tasks.id}`
    return this.http.put<Task>(url, tasks )

  }

  excluir(id: number): Observable<Task> {
    const url = `${this.API}/${id}`
    return this.http.delete<Task>(url)
  }

  buscarPorId(id: number): Observable<Task> {
    const url = `${this.API}/${id}`
    return this.http.get<Task>(url)
  }
}

