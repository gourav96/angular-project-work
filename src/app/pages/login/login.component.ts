import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUser = {
    'email': '',
    'password': '',
    'role': 'auth'
  }


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginFormSubmit() {

    if (this.loginUser.role == 'admin') {
      this.router.navigate(['admin']);
    } else if (this.loginUser.role == 'auth') {
      this.router.navigate(['auth']);
    }
  }

}
