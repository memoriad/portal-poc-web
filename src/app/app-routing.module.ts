import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./core/service/authen/auth.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/authen/authen.module').then(mod => mod.AuthenModule)
  },
  {
    path: 'logout', canActivate: [AuthGuard],
    loadChildren: () => import('./modules/logout/logout.module').then(mod => mod.LogoutModule)
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
