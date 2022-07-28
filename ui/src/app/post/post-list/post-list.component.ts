import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postList: any;

  constructor(private postService: PostService,
    private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getPostList();
    let myamya = localStorage.getItem("user");
    console.log(myamya);

  }

  getPostList() {
    this.postService.getPosts().subscribe((data: any)=> {
      this.postList = data;
    })
  }

  deletePost(id: number) {
    this.postService.deletePost(id).subscribe({
      complete: () => {
        this.getPostList();
      }
    });
  }

}
