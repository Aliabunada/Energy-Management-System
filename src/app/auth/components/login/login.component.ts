import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/shared-components/services/authService/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userlogin: boolean = true;
  userregister: boolean = false;
  submitted = false;
  error = '';

  constructor(
    private router: Router,
    private authService: AuthServiceService
  ) {

  }
  loginForm!: FormGroup;

  ngOnInit(): void {


    this.loginForm = new FormGroup({
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      'password': new FormControl('', Validators.required),

    })

  }


  save() {
    this.submitted = true;
    if (this.loginForm.valid) {
      if (this.authService.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value)) {
        this.router.navigate(['/Meters']);
      }
      else {
        this.error = 'Username or password is incorrect';
      }
    }
  }

}


