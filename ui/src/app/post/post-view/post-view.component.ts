import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  postId!: number;
  postDetail: any;
  constructor(private activatedRoute: ActivatedRoute,
    private postService: PostService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.postId = data['id'];
    });

    if(this.postId){
      this.postService.viewPost(this.postId).subscribe(data => {
        this.postDetail = data;
      });
    }

  }

}
