import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignMobile } from './sign-mobile';

@NgModule({
  declarations: [
    SignMobile,
  ],
  imports: [
    IonicPageModule.forChild(SignMobile),
  ],
})
export class SignMobilePageModule {}
