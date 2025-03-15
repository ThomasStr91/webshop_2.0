import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import {  Router } from '@angular/router';
import { UserLoginDto, UserResponseDto } from '../interfaces/user';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 private loggedIn = signal(this.hasAccess());
 isLoggedIn = computed(() => this.loggedIn())

  private static BASKET_URL= "http://localhost:3000/login"
  
  constructor(
    private router: Router, 
    private httpClient: HttpClient
    ) {}

    private hasAccess(): boolean{
      return localStorage.getItem('currentUser') !== null;
    }


  login(userLogin: UserLoginDto): Observable<UserResponseDto>{
    return this.httpClient.post<UserResponseDto>(`${LoginService.BASKET_URL}`, userLogin).pipe(tap((user: UserResponseDto) => {
      localStorage.setItem('currentUser', user.id);
      console.log("fsefsefe");
      
      this.loggedIn.set(true)
    }))
  }
}
