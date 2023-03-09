import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  authanticated: boolean = false

  login(email: string, password: string): boolean {
    if (email == 'test@gmail.com' && password === '123') {

      this.authanticated = true;
      localStorage.setItem('loggedIn', JSON.stringify(this.authanticated))
      return true;
    }
    else {
      this.authanticated = false;
      localStorage.setItem('loggedIn', JSON.stringify(this.authanticated))
      return false;
    }
  }

  Isauthenticated(): boolean {
    return this.authanticated;
  }
  constructor() { }
}
