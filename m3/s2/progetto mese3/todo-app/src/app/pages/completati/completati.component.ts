import { Component } from '@angular/core';
import { Todo } from 'src/app/todo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent {

  todoArray:Todo[] = []


  constructor(private todosSvc: TodoService){

  }
  ngOnInit(){
    this.todosSvc.getTodos().then(todoRes =>{
      this.todoArray = todoRes
    })
}}
