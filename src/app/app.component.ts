import { Component } from '@angular/core';
import { Todo } from './todo';
import { isDate } from 'util';

// decorator
@Component({
  selector: 'app-root', // the app root, injects the code
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'firstAngular';
  todoValue: string;
  list: Todo[];

  ngOnInit() {
    this.list = [];
    this.todoValue = '';
  }

  addItem() {
    if (this.todoValue !== '') {
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false,
      };
      this.list.push(newItem);
    }
    this.todoValue = '';
  }
  deleteItem(id: number) {
    this.list = this.list.filter((item) => item.id !== id);
  }
}
