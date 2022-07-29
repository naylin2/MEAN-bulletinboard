import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(
    private postService: PostService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  addForm: any = this.formBuilder.group({
    title: '',
    body: '',
    author: ''
  });

  ngOnInit(): void {

    this.addForm = this.formBuilder.group({
      title: '',
      body: '',
      author: this.authService.user.name,
      created_user_id: this.authService.user._id
    })
  }

  createPost() {
    this.postService.addPost(this.addForm.value).subscribe({
      complete: () => {
        this.router.navigateByUrl('posts');
      }
    })
  }

}
