import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/todo';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TodoService }  from '../../services/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  // this is an input property, allows data binding from other components
  @Input() todo: Todo;
  isEditable: boolean;
  today: string;

  constructor(
  private route: ActivatedRoute,
  private todoService: TodoService,
  private location: Location
  ) {}

  ngOnInit(): void {
  this.getTodo();
  this.isEditable = false;
  this.today = new Date().toJSON().split('T')[0];
  }

  getTodo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todoService.getById(id)
      .subscribe(todo => this.todo = todo);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.isEditable = false;
    this.todoService.update(this.todo)
      .subscribe(() => this.goBack());
 }

  edit(): void {
    this.getTodo();
    this.isEditable = true;
  }

}
