import { Component, OnInit } from '@angular/core';
import { AutoriService } from '../../services/autori.service';
import { TodoService } from '../../services/todo.service';
import { iTodo } from '../../interfaces/i-todo';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss',
})
export class CompletedComponent implements OnInit {
  constructor(private userSvc: AutoriService, private todoSvc: TodoService) {}
  arrayTodoCompleted: iTodo[] = [];
  ngOnInit(): void {
    this.todoSvc.getTodo(this.userSvc.arrayUser);

    this.arrayTodoCompleted = this.todoSvc.arrayTodo;

    this.arrayTodoCompleted = this.todoSvc.filterCompletedTodo(
      this.arrayTodoCompleted
    );
  }
}
