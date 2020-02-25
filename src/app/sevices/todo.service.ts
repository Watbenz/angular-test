import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodoList() {
    return [1, 2, 3, 4, 5];
  }
}
