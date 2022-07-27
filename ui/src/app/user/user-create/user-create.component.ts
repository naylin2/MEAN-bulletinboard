import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }
  createForm: any = this.formBuilder.group({
    name: '',
    mail: '',
    dob: ''
   });

  ngOnInit(): void {
  }

  createUser() {
    this.userService.createUser(this.createForm.value).subscribe({
      complete: () => this.router.navigateByUrl("users")
    })
  }
}
