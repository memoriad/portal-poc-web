import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenService } from '@core/service/authen/authen.service';
import Notiflix from "notiflix-angular";
import { environment } from '@env';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor(
    private router: Router,
    private authenService: AuthenService
  ) {
    Notiflix.Loading.Init({ svgSize: "200px", svgColor: "#ffffff" });
    Notiflix.Loading.Hourglass();
    this.authenService.logout().subscribe(_ => {
      Notiflix.Loading.Remove();
      // this.router.navigate(['login']);
      location.href = environment.services.authen.endpoint.logoutWSO2;
    });
  }

}
