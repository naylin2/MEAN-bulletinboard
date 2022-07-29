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
    return this.httpClient.put(url, data)
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
