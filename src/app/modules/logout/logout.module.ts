import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoutRoutingModule } from './logout-routing.module';
import { LogoutComponent } from './components/logout.component';
import { SharedModule } from '@shared/shared.module';
import { AuthenService } from '@core/service/authen/authen.service';

@NgModule({
  declarations: [LogoutComponent],
  imports: [
    CommonModule,
    LogoutRoutingModule,
    SharedModule
  ],
  providers: [AuthenService],
})
export class LogoutModule { }
