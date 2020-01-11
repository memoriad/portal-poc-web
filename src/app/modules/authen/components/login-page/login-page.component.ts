import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import Notiflix from "notiflix-angular";
import { Router } from '@angular/router';
import { environment } from '@env';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  imgPath = environment.ASSET_PATH + '/images/header_section_01.png';

  formLogin: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  submit() {
    if (this.formLogin.status == 'INVALID') {
      Notiflix.Notify.Warning('Please fill username and password.');
    }
    else {
      Notiflix.Loading.Init({ svgSize: "200px", svgColor: "#ffffff" });
      Notiflix.Loading.Hourglass();
      setTimeout(() => {
        Notiflix.Loading.Remove();
        this.router.navigate(['./home']);
      }, 3000);
    }
  }

  authen(){
    location.href = environment.services.authen.endpoint.loginWSO2;
  }

}
