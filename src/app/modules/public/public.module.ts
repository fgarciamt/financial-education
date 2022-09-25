import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { SignInPage } from './sign-in/sign-in.page';
import { SignUpPage } from './sign-up/sign-up.page';


@NgModule({
  declarations: [SignInPage, SignUpPage],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
