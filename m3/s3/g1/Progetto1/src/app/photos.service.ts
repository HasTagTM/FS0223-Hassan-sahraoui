import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iphotos } from './iphotos';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  apiUrl:string = 'https://jsonplaceholder.typicode.com/photos'

  constructor(
    private http:HttpClient
  ) { }


  getPhotos(){
    return this.http.get<Iphotos[]>(this.apiUrl)
  }

  postPhoto(photo:Iphotos){
    return this.http.post<Iphotos>(this.apiUrl, photo)
  }

  putPhoto(photo:Iphotos){
    return this.http.put<Iphotos>(this.apiUrl + '/' + photo.id , photo)
  }

  deletePhoto(id: number){
    return this.http.delete<Iphotos>(this.apiUrl + '/' + id)
  }

}
