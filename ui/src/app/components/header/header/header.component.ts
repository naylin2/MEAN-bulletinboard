import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  user: any;
  isLoggedIn: boolean = false;

  ngOnInit(): void {
    this.setLocal();
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        this.setLocal();
        this.isLoggedIn = this.authService.isLoggedIn;
      }
    })
  }

  setLocal() {
    let userString = localStorage.getItem("user")
    if (userString) this.user= JSON.parse(userString)[0];
  }

  logout(){
    localStorage.removeItem("user");
    localStorage.clear();
    this.authService.isLoggedIn = false;
    this.router.navigateByUrl("login")
  }

}
