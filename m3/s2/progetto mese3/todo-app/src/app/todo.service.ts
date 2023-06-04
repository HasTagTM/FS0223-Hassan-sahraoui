import { Injectable } from '@angular/core';
import { Todo } from './todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl:string = 'http://localhost:3000/todo';
  constructor() { }

  getTodos():Promise<Todo[]>{
    return fetch(this.apiUrl).then(res => res.json())
  }

  addTodos(todoAdd: Todo):Promise<Todo[]>{
    return fetch(this.apiUrl,{
      method:'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(todoAdd)

    }).then(res => res.json())
  }

  deleteTodo(id: number = 0):Promise<void>{

      return fetch(this.apiUrl + '/' + id, {
        method: 'DELETE',
      }).then(res => res.json());

  }


}

