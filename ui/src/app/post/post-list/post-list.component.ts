import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postList: any;

  constructor(private postService: PostService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPostList();
  }

  getPostList() {
    this.postService.getPosts().subscribe((data: any)=> {
      this.postList = data;
    })
  }

  deletePost(id: number) {
    this.postService.deletePost(id);
    this.getPostList();
  }

}
