import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl:string = 'http://localhost:4200/registrati'
  constructor(private http:HttpClient) { }


  signUp(body:{}){
    return this.http.post(this.apiUrl , body)
  }

}
