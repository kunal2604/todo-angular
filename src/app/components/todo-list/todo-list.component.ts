import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: object[];
  todoTitle: string;

  constructor() { }

  ngOnInit() {
    this.todoTitle = '';
    this.todos = [
      {
        'id': 1,
        'title': 'Finish Angular ASAP',
        'completed': false,
        'editing': false,
      },
      {
        'id': 2,
        'title': 'Pack your bags',
        'completed': false,
        'editing': false,
      },
      {
        'id': 3,
        'title': 'Leave',
        'completed': false,
        'editing': false,
      }
    ];
  }

  addTodo() {
    this.todos.push({
      id: 4,
      title: this.todoTitle,
      completed: false,
      editing: false
    });
  }
}
