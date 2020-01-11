import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenService } from '@core/service/authen/authen.service';
import { Profile } from '@modules/webonline/models/profile';
import Notiflix from "notiflix-angular";

@Component({
  selector: 'app-webonline',
  templateUrl: './webonline.component.html',
  styleUrls: ['./webonline.component.scss']
})
export class WebonlineComponent {

  currentUser: Profile;

  constructor(
    private router: Router,
    private authenService: AuthenService
  ) {
    this.authenService.currentUser.subscribe(user => this.currentUser = user);
  }

  logout() {
    Notiflix.Loading.Init({ svgSize: "200px", svgColor: "#ffffff" });
    Notiflix.Loading.Hourglass();
    this.authenService.logout().subscribe(_ => {
      Notiflix.Loading.Remove();
      this.router.navigate(['login']);
    });
  }

}
