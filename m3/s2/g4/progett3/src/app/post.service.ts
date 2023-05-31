import { Injectable } from '@angular/core';
import { Post } from './Model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl: string = 'assets/db.json'

  constructor(){ }

    dammiIpost():Promise<Post[]>{
      return fetch(this.apiUrl).then(res => res.json())
    }

}



