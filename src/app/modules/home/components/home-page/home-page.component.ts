import { Component } from '@angular/core';
import { AuthenService } from '@core/service/authen/authen.service';
import Notiflix from "notiflix-angular";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(
    private router: Router,
    private authenService: AuthenService
  ) {
    Notiflix.Loading.Init({ svgSize: "200px", svgColor: "#ffffff" });
    Notiflix.Loading.Hourglass();
    this.authenService.getUserMe().subscribe(
      profile => {
        Notiflix.Loading.Remove();
        console.log('profile:', profile)
        if (!profile) {
          this.router.navigate(['login']);
        }
      });
  }

}
