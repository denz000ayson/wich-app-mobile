import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignEmail } from './sign-email';

@NgModule({
  declarations: [
    SignEmail,
  ],
  imports: [
    IonicPageModule.forChild(SignEmail),
  ],
})
export class SignEmailPageModule {}
