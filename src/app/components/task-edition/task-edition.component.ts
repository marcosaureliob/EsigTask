import { Component } from '@angular/core';
import { Task } from '../tasks/task';
import { ApiService } from '../tasks/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-edition',
  templateUrl: './task-edition.component.html',
  styleUrls: ['./task-edition.component.scss']
})
export class TaskEditionComponent {
tasks: Task = {
  id: 0,
  title: '',
  description: '',
  responsible: '',
}

constructor(private service: ApiService,
  private router: Router,
  private route: ActivatedRoute ){}

ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  this.service.buscarPorId(parseInt(id!)).subscribe((tasks) => this.tasks = tasks);
}

editarTask(){
  this.service.editar(this.tasks).subscribe(() => {
    this.router.navigate(['list']);

  })

}

cancelar(){
  this.router.navigate(['']);
}
}
