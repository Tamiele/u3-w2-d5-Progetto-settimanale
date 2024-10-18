import { Component, OnInit } from '@angular/core';
import { AutoriService } from '../../services/autori.service';
import { TodoService } from '../../services/todo.service';
import { iTodo } from '../../interfaces/i-todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  arrayTodoHome: iTodo[] = [];
  searchTerm: string = '';
  constructor(private userSvc: AutoriService, private todoSvc: TodoService) {}

  ngOnInit(): void {
    this.todoSvc.getTodo(this.userSvc.arrayUser);

    this.arrayTodoHome = this.todoSvc.arrayTodo;
  }

  filteredArrayTodoHome(): iTodo[] {
    if (!this.searchTerm) {
      return this.arrayTodoHome;
    }

    const lowerSearchTerm = this.searchTerm.toLowerCase();
    return this.arrayTodoHome.filter(
      (author) =>
        author.arrayUser?.firstName.toLowerCase().includes(lowerSearchTerm) ||
        author.arrayUser?.lastName.toLowerCase().includes(lowerSearchTerm)
    );
  }
}
