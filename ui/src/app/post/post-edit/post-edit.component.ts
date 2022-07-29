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
  post: any;
  postId!: number;
  editForm: any = this.formBuilder.group({
    title: '',
    body: ''
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
        this.post = data;
        this.editForm = this.formBuilder.group({
          title: this.post.title,
          body: this.post.body
        })
      });
      }
  }
  updatePost() {
    this.postService.updatePost(this.postId, this.editForm.value).subscribe({
      complete: () => this.router.navigateByUrl('posts')
    })
  }
}
