import { Component, OnInit } from '@angular/core';

import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  displayDone: boolean;
  displayAll: boolean;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
    this.displayAll = true;
  }

  getTodos(): void {
    this.todoService.getAll()
        .subscribe(todos => this.todos = todos);
  }

  delete(todo: Todo): void {
    this.todos = this.todos.filter(h => h !== todo);
    this.todoService.delete(todo).subscribe();
  }

  filterDone(): void {
    this.displayDone = true;
    this.displayAll = false;
  }

  filterPending(): void {
    this.displayDone = false;
    this.displayAll = false;
  }

  showAll(): void {
    this.displayAll = true;
    this.displayDone = true;
  }

  changeToDone(todo: Todo): void {
    todo.status = true;
    this.todoService.update(todo)
      .subscribe();
  }

}
