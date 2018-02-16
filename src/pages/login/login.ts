import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { User } from "../../services/user/user.model";
import { UserService } from "../../services/user/user.service";
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { ResetPassword } from './modal/reset-password/reset-password';
import { CONFIG_FILE_URL } from '../../shared/config';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  config = CONFIG_FILE_URL;
  user = {} as User;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService : UserService,
    public storage : Storage,
    private modal: ModalController) {
  }

  login(user : User){
    this.userService.userLogin.signInWithEmail(user).then(user => {
      let user_id = {} as any;
      user_id = user;
      this.storage.set('user_id', user_id.uid);
      // this.navCtrl.setRoot(HomePage);
    })
    .catch(err => {
      console.log(err);
    })
  }

  register(){
    this.navCtrl.push('RegisterPage');
  }
  openResetPassword() {
    let resetPassword = this.modal.create(ResetPassword);
    resetPassword.present();
  }

}
