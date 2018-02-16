import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { User } from "../../services/user/user.model";
import { UserService } from "../../services/user/user.service";
import { SignEmail } from './modal/sign-email/sign-email';
import { SignMobile } from './modal/sign-mobile/sign-mobile';


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
    public viewCtrl: ViewController,
    private modal: ModalController) {
  }

  ionViewWillEnter() {
    this.userService.getData();
  }

  register(user : User){
  	this.userService.userRegister.signUpWithEmail(user)
  		.then(res => {
  			 this.viewCtrl.dismiss();
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

}
