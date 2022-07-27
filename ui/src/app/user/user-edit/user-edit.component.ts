import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }
  user: any;
  paramsId!: number;
  editForm: any = this.formBuilder.group({
    name: '',
    mail: '',
    dob: ''
   });

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.paramsId = data['uid'];
    })
    this.getUser();
  }

  getUser() {
    this.userService.getUser( this.paramsId ).subscribe(
      data => {
        this.user = data
        this.editForm = this.formBuilder.group({
          name: this.user.name,
          mail: this.user.mail,
          dob: this.user.dob
        })
      }
    )
  }

  updateUser() {
    this.userService.updateUser(this.paramsId, this.editForm.value).subscribe({
      complete: () => this.router.navigateByUrl("users")
    })
  }
}
