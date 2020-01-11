import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebonlineComponent } from './components/webonline-page/webonline.component';

const routes: Routes = [
  { path: '', component: WebonlineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebonlineRoutingModule { }
