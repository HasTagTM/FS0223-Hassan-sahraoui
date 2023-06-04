import { Component, OnInit } from '@angular/core';
import { TodO } from 'src/app/tod-o';
import { Todo } from 'src/app/todo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit{

  todoArray:Todo[] = []
  loading: boolean = true;
  todoAggiunto:Todo = new TodO('',true, 0)
  constructor(private todosSvc: TodoService){

  }

  ngOnInit(){
    this.todosSvc.getTodos().then(todoRes =>{
      this.todoArray = todoRes
      this.loading = false
    })




  }

  addTodos() {


    const newTodo: Todo = {
      title: this.todoAggiunto.title,
      completed: this.todoAggiunto.completed
    };


    this.todoArray.push(newTodo);

    this.todosSvc.addTodos(this.todoAggiunto)
    .then(res => console.log(res))


  }


  delete(id: number | undefined) {
    if (id !== undefined) {
      this.todosSvc.deleteTodo(id).then(res => {
        console.log('Todo eliminato');
        this.todoArray = this.todoArray.filter(todo => todo.id);
      });
    }
  }



  updateCompletedStatus() {
    this.todoAggiunto.completed = !this.todoAggiunto.completed;
  }
}
