import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment.development';
import { AccessData } from './intefaces/access-data';
import { BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RegisterData } from './intefaces/register-data';
import { IloginData } from './intefaces/ilogin-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper: JwtHelperService = new JwtHelperService()
  apiUrl = environment.apiUrl
  private authSubject = new BehaviorSubject<null | AccessData>(null)
  user$ = this.authSubject.asObservable()
  isLoggedin$ = this.user$.pipe(map(dato => boolean(dato)))

  constructor(private http: HttpClient, private router:Router) { }

  signUp(data:RegisterData){
    return this.http.post<AccessData>(this.apiUrl + '/register', data)
  }

  login(data:IloginData){
    return this.http.post<AccessData>(this.apiUrl + '/login', data).pipe(tap(data => {
      this.authSubject.next(data);
      localStorage.setItem('user', JSON.stringify(data));
      const expDate = this.jwtHelper.getTokenExpirationDate(data.accessToken)as Date
    }))
  }
}

