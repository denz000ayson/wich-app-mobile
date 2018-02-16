import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UserService } from "../../../../services/user/user.service";
import { User } from "../../../../services/user/user.model";
import { HomePage } from '../../../home/home';
@IonicPage()
@Component({
  selector: 'page-sign-email',
  templateUrl: 'sign-email.html',
})
export class SignEmail {
  user = {} as User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService : UserService,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignEmailPage');
  }

  register(user : User){
    this.userService.userRegister.signUpWithEmail(user)
      .then(res => {
          this.viewCtrl.dismiss();
         // this.navCtrl.push(HomePage);
      })
      .catch(err => { console.log(err) })
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
