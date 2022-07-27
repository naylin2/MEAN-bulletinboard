import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }
  user: any;
  postId!: number;
  editForm: any = this.formBuilder.group({
    title: '',
    body: '',
    author: ''
  });

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.postId = data['id'];
      this.assignPost();
    })
  }
  assignPost() {
    if(this.postId){
      this.postService.viewPost(this.postId).subscribe(data => {
        this.user = data;
        this.editForm = this.formBuilder.group({
          title: this.user.title,
          body: this.user.body,
          author: this.user.author
        })
      });
      }
  }
  updatePost() {
    this.postService.updatePost(this.postId, this.editForm.value)
    this.router.navigateByUrl('posts')
  }
}
