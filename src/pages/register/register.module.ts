import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { UserService } from '../../services/user/user.service';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    IonicStorageModule.forRoot()
  ],
  providers :[
  	UserService
  ]
})
export class RegisterPageModule {}
