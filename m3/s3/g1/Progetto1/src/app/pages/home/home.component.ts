import { Component, OnInit } from '@angular/core';
import { Iphotos } from 'src/app/iphotos';
import { PhotosService } from 'src/app/photos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  title = 'Progetto1';
  photoArray:Iphotos[] = []

  constructor(private photoSvc: PhotosService){}
  ngOnInit(): void {
    this.photoSvc.getPhotos().subscribe(res => {
      this.photoArray = res
    })
  }

  delete(id:number){
    this.photoSvc.deletePhoto(id).subscribe(res => {
    this.photoArray = this.photoArray.filter(foto => foto.id)
    })
  }


  addPhoto(photo:Iphotos){
    this.photoArray.push(photo)
  }
}
