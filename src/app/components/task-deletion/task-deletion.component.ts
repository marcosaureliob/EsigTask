import { Component, OnInit } from '@angular/core';
import { Task } from '../tasks/task';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../tasks/tasks.service';

@Component({
  selector: 'app-task-deletion',
  templateUrl: './task-deletion.component.html',
  styleUrls: ['./task-deletion.component.scss']
})
export class TaskDeletionComponent implements OnInit {

  tasks: Task ={
    id: 0,
    title: '',
    description: '',
    responsible: ''
  }

  constructor(private service: ApiService,
    private router: Router,
    private route: ActivatedRoute){}

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id')
      this.service.buscarPorId(parseInt(id!)).subscribe((tasks) => {
        this.tasks = tasks
      })
    }
    excluirTasks() {
      if(this.tasks.id) {
        this.service.excluir(this.tasks.id).subscribe(() => {
          this.router.navigate(['list'])
        })
      }
    }
    cancelar() {
      this.router.navigate([''])
    }
  }


