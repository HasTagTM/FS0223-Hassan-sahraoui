import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment.development';
import { AccessData } from './intefaces/access-data';
import { BehaviorSubject, catchError, map, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RegisterData } from './intefaces/register-data';
import { IloginData } from './intefaces/ilogin-data';
import { User } from './intefaces/user';
import { getNumberOfCurrencyDigits } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper: JwtHelperService = new JwtHelperService()
  apiUrl = environment.apiUrl
  private authSubject = new BehaviorSubject<null | AccessData>(null)
  user$ = this.authSubject.asObservable()
  isLoggedin$ = this.user$.pipe(map(dato => Boolean(dato)));
  authLogoutTimer: any;

  constructor(private http: HttpClient, private router:Router) {
    this.restoreUser()
   }

  signUp(data:RegisterData){
    return this.http.post<AccessData>(this.apiUrl + '/register', data)
    .pipe(catchError(this.errors))
  }

  login(data:IloginData){
    return this.http.post<AccessData>(this.apiUrl + '/login', data).pipe(tap(data => {
      this.authSubject.next(data);
      localStorage.setItem('user', JSON.stringify(data));
      const expDate = this.jwtHelper.getTokenExpirationDate(data.accessToken)as Date;
      this.autoLogout(expDate)
    }),
    catchError(this.errors))
  }

  restoreUser(){
    const userJsn = localStorage.getItem('user')
    if(!userJsn){
      return
    }
    const user:AccessData = JSON.parse(userJsn)
    if(this.jwtHelper.isTokenExpired(user.accessToken)){
      return
    }
    this.authSubject.next(user)
  }

  logout(){
    this.authSubject.next(null);
    localStorage.removeItem('user')
    this.router.navigate(['/login']);
    if(this.authLogoutTimer){
      clearTimeout(this.authLogoutTimer)
    }
  }

  autoLogout(expDate:Date){
    const expMs = expDate.getTime() - new Date().getTime();
    this.authLogoutTimer = setTimeout(() => {

    }, expMs)
  }

  errors(err: any) {
    switch (err.error) {
        case "Email and Password are required":
            return throwError('Email e password obbligatorie');
            break;
        case "Email already exists":
            return throwError('Utente esistente');
            break;
        case 'Email format is invalid':
            return throwError('Email scritta male');
            break;
        case 'Cannot find user':
            return throwError('utente inesistente');
            break;
            default:
        return throwError('Errore');
            break;
    }
  }
}





