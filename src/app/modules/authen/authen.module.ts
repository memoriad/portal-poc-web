import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SharedModule } from '@shared/shared.module';
import { AuthenRoutingModule } from './authen-routing.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    AuthenRoutingModule,
    SharedModule
  ]
})
export class AuthenModule { }
