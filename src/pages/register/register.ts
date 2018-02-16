import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { User } from "../../services/user/user.model";
import { UserService } from "../../services/user/user.service";
import { SignEmail } from './modal/sign-email/sign-email';
import { SignMobile } from './modal/sign-mobile/sign-mobile';
import { ResetPassword } from './modal/reset-password/reset-password';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
	user = {} as User;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public userService : UserService,
    private modal: ModalController) {
  }

  ionViewWillEnter() {
    this.userService.getData();
  }

  register(user : User){
  	this.userService.userRegister.signUpWithEmail(user)
  		.then(res => {
  			 this.navCtrl.setRoot(HomePage);
  		})
  		.catch(err => { console.log(err) })
  }

  openSignUpEmail() {
    let signUpEmail = this.modal.create(SignEmail);
    signUpEmail.present();
  }

  openSignUpMobile() {
    let signUpMobile = this.modal.create(SignMobile);
    signUpMobile.present();
  }
  openResetPassword() {
    let resetPassword = this.modal.create(ResetPassword);
    resetPassword.present();
  }
}
