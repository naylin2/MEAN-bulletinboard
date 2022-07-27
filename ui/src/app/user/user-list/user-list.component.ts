import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }
  users!: any;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      data => this.users = data
    )
  }

  deleteUser(uid: number) {
    this.userService.deleteUser(uid).subscribe({
      complete: () => this.getUsers()
    })
  }
}
