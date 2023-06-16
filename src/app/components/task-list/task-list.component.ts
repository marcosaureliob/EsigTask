import { Component, OnInit } from '@angular/core';
import { Task } from '../tasks/task';
import { ApiService } from '../tasks/tasks.service';



@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private service: ApiService ){}
  ngOnInit(): void {
    this.service.listar().subscribe((tasks) => {
      this.tasks = tasks;
    })
  }

  concluir(task: Task): void {
    if (task.id !== undefined) {
        task.status = 'Concluído';
        this.service.concluirTask(task.id).subscribe(() => {
        });
    } else {
        console.error('Task ID is undefined');
    }
}
}

