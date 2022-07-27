import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  url = "http://localhost:3000/users";

  getUsers() {
    return this.http.get(this.url);
  }

  getUser(uid: number) {
    return this.http.get(`${this.url}/${uid}`);
  }

  updateUser(uid: number, user: {name: string, mail: string, dob: string}) {
    return this.http.put(`${this.url}/${uid}`, user)
  }

  createUser(user: any) {
    return this.http.post(this.url, user)
  }

  deleteUser(uid: number) {
    return this.http.delete(`${this.url}/${uid}`)
  }
}
