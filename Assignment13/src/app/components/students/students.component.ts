import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  users: User[];

  constructor(private dbService: DbService) {
    this.users = dbService.getData();
  }

  ngOnInit() {
  }

}
