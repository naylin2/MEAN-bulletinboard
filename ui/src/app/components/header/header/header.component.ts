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
    this.user = localStorage.getItem("user")
    console.log(this.user);

    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        this.isLoggedIn = this.authService.isLoggedIn;
      }
    })
  }

  logout(){
    localStorage.removeItem("user");
    this.router.navigateByUrl("login")
  }

}
