import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent }      from '../components/todos/todos.component';
import { TodoDetailComponent }  from '../components/todo-detail/todo-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos/:id', component: TodoDetailComponent },
  { path: 'todos', component: TodosComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
