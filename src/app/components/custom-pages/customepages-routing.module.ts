import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Error404Component } from "./error404/error404.component";
import { Error500Component } from "./error500/error500.component";
import { ForgetPasswordComponent } from "./forget-password/forget-password.component";
import { LockscreenComponent } from "./lockscreen/lockscreen.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UnderConstructionComponent } from "./under-construction/under-construction.component";

const routes: Routes = [
    {
      path: '',
      children: [
        {
            path: 'error-404', component: Error404Component
        },
        {
            path: 'error-500', component: Error500Component
        },
        {
            path: 'forget-password', component: ForgetPasswordComponent
        },
        {
            path: 'lockscreen', component: LockscreenComponent
        },
        {
            path: 'reset-password', component: ResetPasswordComponent
        },
        {
            path: 'sign-in', component: SignInComponent
        },
        {
            path: 'sign-up', component: SignUpComponent
        },
        {
            path: 'under-construction', component: UnderConstructionComponent
        }
      ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class  CustomePagesRoutingModule { }