import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  isLoggedIn: boolean = false;
  constructor() {
    let userString = localStorage.getItem("user")
    if (userString) this.user= JSON.parse(userString)[0];
    if(this.user) this.isLoggedIn = true;
    else this.isLoggedIn = false;
  }
}
