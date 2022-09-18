import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInPage } from './sign-in/sign-in.page';
import { SignUpPage } from './sign-up/sign-up.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [],
    children: [
      {
        path: 'sign-in',
        component: SignInPage,
      },
      {
        path: 'sign-up',
        component: SignUpPage,
      },
      {
        path: '**',
        redirectTo: 'sign-in',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
