import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {}

  getPosts() {
    let url = 'http://localhost:3000/posts';
    return this.httpClient.get(url);
  }

  viewPost(id: number) {
    let url = 'http://localhost:3000/posts/'+id;
    return this.httpClient.get(url);
  }

  updatePost(id: number, data:any) {
    let url = 'http://localhost:3000/posts/'+id;
    this.httpClient.put(url, data).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }

  addPost(data: any) {
    let url = 'http://localhost:3000/posts';
    return this.httpClient.post(url, data);
  }

  deletePost(id: number) {
    let url = 'http://localhost:3000/posts/'+id;
    return this.httpClient.delete(url);
  }

}
