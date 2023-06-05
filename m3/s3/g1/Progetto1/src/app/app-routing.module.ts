import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PhotosLikeComponent } from './pages/photos-like/photos-like.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'foto-preferite',
    component: PhotosLikeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
