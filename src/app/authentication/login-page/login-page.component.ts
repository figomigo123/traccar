import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

 
  loginForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email : ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get form(){
    return this.loginForm.controls;
  }

  Submit(){
    let info = `email=${this.loginForm.controls['email'].value}&password=${this.loginForm.controls['password'].value}`

    this.authService.createSession("/session", info).subscribe((res)=>{
      localStorage.setItem('email', this.loginForm.controls['email'].value);
      localStorage.setItem('password', this.loginForm.controls['password'].value);
      localStorage.setItem('token', res['token']);
      this.router.navigate(['/']);
    },(err)=>{
      alert("Wrong email and password")
    })

  }

}
