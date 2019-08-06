import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: object[];
  todoTitle: string;
  nextId: number;

  constructor() { }

  ngOnInit() {
    this.nextId = 4;
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

  addTodo(): void {
    if(this.todoTitle.trim().length === 0)
      return;

    this.todos.push({
      id: this.nextId,
      title: this.todoTitle,
      completed: false,
      editing: false
    });

      this.todoTitle = '';
      this.nextId++;
    }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }
}
