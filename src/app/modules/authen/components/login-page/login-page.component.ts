import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from '@env';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  authenByPassword(){
    localStorage.setItem('authType', 'password')
    location.href = environment.services.authen.endpoint.loginWSO2Password;
  }

  authenByCertificate(){
    localStorage.setItem('authType', 'certificate')
    location.href = environment.services.authen.endpoint.loginWSO2Certificate;
  }

}
