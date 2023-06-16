import { ApiService } from '../tasks/tasks.service';
import { Task } from '../tasks/task';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-register',
  templateUrl: './task-register.component.html',
  styleUrls: ['./task-register.component.scss']
})
export class TaskRegisterComponent implements OnInit {
  allTasks: Task[] = [];
  filteredTasks: Task[] = [];
  selectedResponsible: string = '';

  newTask: Task = { 
    title: '',
    description: '',
    responsible: '',
    status: 'Em andamento',
  };

  constructor(private service: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks(): void {
    this.service.listar().subscribe((tasks) => {
      this.allTasks = tasks;
      this.filterTasks();
    });
  }

  filterTasks(): void {
    if (this.selectedResponsible) {
      this.filteredTasks = this.allTasks.filter(task => task.responsible === this.selectedResponsible);
    } else {
      this.filteredTasks = this.allTasks;
    }
  }

  criarTask(): void {
    this.service.criar(this.newTask).subscribe(() => {
      this.fetchTasks();
      this.router.navigate(['list']);
    });
  }
}
