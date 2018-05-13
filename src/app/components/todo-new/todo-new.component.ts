import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TodoService }  from '../../services/todo.service';

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.css']
})
export class TodoNewComponent implements OnInit {

  today: string;
  todo: Todo;

  constructor(
  private route: ActivatedRoute,
  private todoService: TodoService,
  private location: Location
  ) {}

  ngOnInit(): void {
    this.today = new Date().toJSON().split('T')[0];
    this.todo = new Todo();
  }

  goBack(): void {
    this.location.back();
  }

  add(): void {
    if (!this.todo.name || !this.todo.dueDate) { return; }
    this.todo.status = false;
    this.todoService.create(this.todo)
      .subscribe(() => this.goBack());
  }

}
