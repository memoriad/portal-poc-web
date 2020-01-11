import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenService } from '@core/service/authen/authen.service';
import { Profile } from '@modules/webonline/models/profile';

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
    this.router.navigate(['logout']);
  }

}
