import { Component } from '@angular/core';
import { Post } from 'src/app/Model/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.css']
})
export class ActivePostComponent {
  posts: Post[] = [];
  constructor(private postSvc: PostService){

    this.postSvc.dammiIpost().then(post =>{
      this.posts = post.filter(p => p.active)
    })

  }
}
