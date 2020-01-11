import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebonlineRoutingModule } from './webonline-routing.module';
import { WebonlineComponent } from './components/webonline-page/webonline.component';
import { SharedModule } from '@shared/shared.module';
import { AuthenService } from '@core/service/authen/authen.service';

@NgModule({
  declarations: [WebonlineComponent],
  imports: [
    CommonModule,
    WebonlineRoutingModule,
    SharedModule
  ],
  providers: [AuthenService],
})
export class WebonlineModule { }
