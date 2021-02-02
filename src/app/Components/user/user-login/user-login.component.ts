import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/Service/user.service';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/Service/system.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  title: string = 'User Login';
  msg: string = '';
  user: User = new User();

  constructor(
    private userSvc: UserService,
    private router: Router,
    private systemSvc: SystemService
  ) {}

  ngOnInit(): void {}
  login() {
    this.userSvc.login(this.user).subscribe(
      (resp) => {
        if (resp == null) {
        } else {
          this.user = resp as User;
          this.systemSvc.loggedInUser = this.user;
          this.router.navigateByUrl('/user-list');
        }
      },
      (err) => {
        this.msg = 'Error during login';
      }
    );
  }
}
