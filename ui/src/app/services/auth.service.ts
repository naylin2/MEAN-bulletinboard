import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  isLoggedIn: boolean = false;
  constructor() {
    this.user = localStorage.getItem("user");
    if(this.user) this.isLoggedIn = true;
    else this.isLoggedIn = false;
  }
}
