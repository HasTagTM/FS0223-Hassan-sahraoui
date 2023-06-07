import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl:string = 'http://localhost:3000/profile/signin'
  constructor(private http:HttpClient) { }


  signUp(body:{}){
    return this.http.post(this.apiUrl , body).pipe(map((res:any) => res.token))
  }

}
