import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { PageResetPasswordComponent } from './pages/page-reset-password/page-reset-password.component';
import { PageForgotPasswordComponent } from './pages/page-forgot-password/page-forgot-password.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';

@NgModule({
  declarations: [PageResetPasswordComponent, PageForgotPasswordComponent, PageSignInComponent, PageSignUpComponent],
  imports: [CommonModule, AccountRoutingModule],
})
export class AccountModule {}
