import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskRegisterComponent } from './components/task-register/task-register.component';
import { TaskListComponent } from './components/task-list/task-list.component';

const routes: Routes = [
  {path: '', component: TaskRegisterComponent},
  {path: 'list', component: TaskListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
