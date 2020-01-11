import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./core/service/authen/auth.guard";

const routes: Routes = [
  {
    path: 'login', 
    loadChildren: () => import('./modules/authen/authen.module').then(mod => mod.AuthenModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'webonline', canActivate: [AuthGuard],
    loadChildren: () => import('./modules/webonline/webonline.module').then(mod => mod.WebonlineModule)
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
