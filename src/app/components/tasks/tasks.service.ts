import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly API = 'http//localhost:3000/tasks'
  constructor(private http: HttpClient) { }
  listar(): Observable<Task[]>{
    return this.http.get<Task[]>(this.API)

  }
}

