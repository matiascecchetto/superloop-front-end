import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { DatePipe } from '@angular/common';

import { Todo } from '../models/todo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe
  ) { }

  /** GET all TODOs */
  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(API_URL)
      .pipe(
        catchError(this.handleError('getTodos', []))
      );
  }

  /** GET todo by id. Will 404 if id not found */
  getById(id: number): Observable<Todo> {
    const url = `${API_URL}/${id}`;
    return this.http.get<Todo>(url)
      .pipe(
        catchError(this.handleError<Todo>(`getTodo id=${id}`))
      );
  }

  /** PUT: update the todo on the server */
  update(todo: Todo): Observable<any> {
    return this.http.put(API_URL, todo, httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateTodo'))
      );
  }

  /** POST: add a new todo to the server */
  create(todo: Todo): Observable<any> {
    return this.http.post<Todo>(API_URL, todo, httpOptions)
      .pipe(
        catchError(this.handleError<Todo>('addTodo'))
      );
  }

  /** DELETE: delete the todo from the server */
  delete(todo: Todo | number): Observable<any> {
    const id = typeof todo === 'number' ? todo : todo.id;
    const url = `${API_URL}/${id}`;
    return this.http.delete<Todo>(url, httpOptions)
      .pipe(
        catchError(this.handleError<Todo>('deleteTodo'))
      );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
