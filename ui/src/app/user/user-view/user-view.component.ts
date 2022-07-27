import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) { }
  user!: any;
  paramsId!: number;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.paramsId = data['uid'];
    })
    this.getUser()
  }

  getUser() {
    this.userService.getUser(this.paramsId).subscribe(
      data => this.user=data
    )
  }
}
