import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Todo } from '../models/todo';
import { TODOS } from '../mocks/mock-todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(): Observable<Todo[]> {
    return of(TODOS);
  }

  getTodo(id: number): Observable<Todo> {
    return of(TODOS.find(todo => todo.id === id));
  }

}