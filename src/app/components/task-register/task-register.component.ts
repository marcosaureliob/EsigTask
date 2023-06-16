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
  tasks: Task = {
    title: '',
    description: '',
    responsible: '',
    status: 'Em andamento',
  }

  constructor(private service: ApiService,
     private router: Router){}
  ngOnInit(): void {
  }

  criarTask(){
    this.service.criar(this.tasks).subscribe(()=>{
      this.router.navigate(['list'])
  })
}

}
