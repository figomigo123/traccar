import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { CustomePagesRoutingModule } from './customepages-routing.module';
import { NgxTimerModule } from 'ngx-timer';



@NgModule({
  declarations: [SignInComponent, SignUpComponent, ForgetPasswordComponent, ResetPasswordComponent, LockscreenComponent, UnderConstructionComponent, Error404Component, Error500Component],
  imports: [
    CommonModule,
    CustomePagesRoutingModule,
    NgxTimerModule
  ]
})
export class CustomPagesModule { }
