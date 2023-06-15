import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskRegisterComponent } from './components/task-register/task-register.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskDeletionComponent } from './components/task-deletion/task-deletion.component';
import { TaskEditionComponent } from './components/task-edition/task-edition.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskRegisterComponent,
    TaskListComponent,
    TaskDeletionComponent,
    TaskEditionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
