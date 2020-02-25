import { Component, ViewChild, ElementRef } from '@angular/core';
import { TodoService } from './sevices/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'World!';
  isLoading = true;

  amount = 123456.789123456789;
  today = new Date();
  todoList: number[] = [];

  email: string;

  imageUrl = 'https://placeimg.com/300/300/animals';

  isActive = true;

  user = {
    name: 'Utsumaki Naruto', 
    age: 31,
    isNinja: true
  }

  constructor(
    private todoService: TodoService
  ) {
    this.todoList = this.todoService.getTodoList();
  }

  onClickOkButton() {
    console.log('You have clicked OK!');
    this.email = "";
  }

  search(email: string) {
    console.log('search', email);

  }
}
