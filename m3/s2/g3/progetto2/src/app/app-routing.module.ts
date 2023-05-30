import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ActivePostComponent } from './pages/active-post/active-post.component';
import { InactivePostsComponent } from './pages/inactive-posts/inactive-posts.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'posts-active',
    component: ActivePostComponent
  },
  {
    path: 'posts-inactive',
    component: InactivePostsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
