import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent }      from '../components/todos/todos.component';
import { TodoDetailComponent }  from '../components/todo-detail/todo-detail.component';
import { TodoNewComponent }  from '../components/todo-new/todo-new.component';

const routes: Routes = [
  { path: 'todos/new', component: TodoNewComponent },
  { path: 'todos/:id', component: TodoDetailComponent },
  { path: 'todos', component: TodosComponent },
  { path: '', redirectTo: '/todos', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
