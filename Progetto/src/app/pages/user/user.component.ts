import { Component, OnInit } from '@angular/core';
import { iTodo } from '../../interfaces/i-todo';
import { AutoriService } from '../../services/autori.service';
import { TodoService } from '../../services/todo.service';
import { iUser } from '../../interfaces/i-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  arrayTodoUser: (iUser & { task: iTodo[] })[] = [];

  constructor(private userSvc: AutoriService, private todoSvc: TodoService) {}

  ngOnInit(): void {
    this.userSvc.getUserTodo(this.todoSvc.arrayTodo);
    this.arrayTodoUser = this.userSvc.arrayUserTodo;
  }
}
