import { Component } from '@angular/core';
import { Post } from 'src/app/Model/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrls: ['./inactive-post.component.css']
})
export class InactivePostComponent {
  posts: Post[] = [];
  constructor(private postSvc: PostService){

    this.postSvc.dammiIpost().then(post =>{
      this.posts = post.filter(p => !p.active)
    })
}
}
