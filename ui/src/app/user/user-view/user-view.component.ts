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
    private route: ActivatedRoute
  ) { }
  user!: any;

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    const params = this.route.snapshot.paramMap;
    const paramsId = Number(params.get('uid'));
    this.userService.getUser(paramsId).subscribe(
      data => this.user=data
    )
  }
}
