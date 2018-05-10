import { Todo } from '../models/todo';

export const TODOS: Todo[] = [
  { id: 1, name: 'Plan something', description: 'This is a test of simple TODOs', dueDate: new Date(2018, 4, 11), status: false },
  { id: 2, name: 'Do something else', description: 'This is a another test of simple TODOs', dueDate: new Date(2018, 4, 13), status: false },
  { id: 3, name: 'Test something', description: 'This is yet another test of simple TODOs', dueDate: new Date(2018, 4, 21), status: false },
  { id: 4, name: 'Maybe code something', description: 'This is whatever test of simple TODOs', dueDate: new Date(2018, 5, 1), status: true },
  { id: 5, name: 'Have a coffee', description: 'This is called a break', dueDate: new Date(2018, 4, 10), status: false },
  { id: 6, name: 'Go for a run', description: 'This is called exercise', dueDate: new Date(2018, 4, 11), status: false }
];
