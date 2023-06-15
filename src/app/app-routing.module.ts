import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskRegisterComponent } from './components/task-register/task-register.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskDeletionComponent } from './components/task-deletion/task-deletion.component';
import { TaskEditionComponent } from './components/task-edition/task-edition.component';

const routes: Routes = [
  {path: '', component: TaskRegisterComponent},
  {path: 'list', component: TaskListComponent},
  {path: 'delete/:id', component: TaskDeletionComponent},
  {path: 'edit/:id', component: TaskEditionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
