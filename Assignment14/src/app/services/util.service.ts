import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UtilService {

  userUrl: string = "http://jsonplaceholder.typicode.com/users/1";
  postsUrl: string = "http://jsonplaceholder.typicode.com/posts?userId=1";

  constructor(public http: HttpClient) { }

  getUser() {
    return this.http.get(this.userUrl);
  }

  getUserPosts() {
    return this.http.get(this.postsUrl);
  }

}
