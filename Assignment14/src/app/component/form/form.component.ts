import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../services/util.service';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from "@angular/forms";
import { Observable } from "rxjs/Rx";
import { Router, NavigationExtras } from '@angular/router';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  form: FormGroup;
  user: User;
  userInfo: any;
  userPost: any;

  constructor(public myHttpService: UtilService, private formBuilder: FormBuilder, private router: Router) {
    this.form = formBuilder.group({
      'username': ['', [Validators.required]],
      'email': ['', [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]],
      'post': ['', [Validators.required, this.postValidator ]]
    });

    this.form.statusChanges.subscribe(
      (data: any) => console.log(data)
    );
  }

  postValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value.length < 10) {
      return { postInvalid: true };
    }
    return null;
  }

  onSubmit() {
    this.user = new User();
    this.user.name = this.form.value.username;
    this.user.email = this.form.value.email;
    this.user.post = this.form.value.post;

    console.log(this.user);

    let navigationExtras: NavigationExtras = {
      queryParams: this.user
    };

    this.router.navigate(['./welcome'], navigationExtras);
  }

  getData() {
    this.myHttpService.getUser().subscribe(
      res => {
        console.log(res);
        this.userInfo = res;
      },
      err => console.error(err),
      () => console.log('Operation fetch user conpleted!')
    );

    this.myHttpService.getUserPosts().subscribe(
      res => {
        console.log(res);
        this.userPost = res;
      },
      err => console.error(err),
      () => console.log('Operation fetch posts conpleted!')
    );
  }

  ngOnInit() {
  }

}
