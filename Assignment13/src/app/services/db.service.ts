import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { User } from '../models/user.model';
import { Router } from "@angular/router";

@Injectable()
export class DbService {
  private data: User[] = [
    new User(1, "Rajesh Subedi", "12345", "rajesh@gmail.com"),
    new User(2, "Niwesh", "23456", "niwesh@gmail.com"),
    new User(3, "Dewan", "34567", "dewan@gmail.com"),
    new User(4, "Shreedhar", "45678", "shreedhar@gmail.com"),
    new User(5, "Suman", "56789", "suman@gmail.com"),
    new User(6, "Shreeram", "67890", "shreeram@gmail.com")
  ];

  constructor(private logService: LogService, private router: Router) {}
    
  getData() {
    return this.data;
  }

  getDataById(id) {
    let userInfo = this.data[id-1];
    if(userInfo != undefined) {
      return this.data[id-1];
    }else {
      this.router.navigate(['./error']);
    }
  }
}