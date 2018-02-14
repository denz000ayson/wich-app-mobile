import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from "../../services/user/user.model";
import { UserService } from "../../services/user/user.service";
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user = {} as User;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService : UserService,
    public storage : Storage) {
  }
  login(user : User){
    this.userService.userLogin.signInWithEmail(user).then(user => {
      let user_id = {} as any;
      user_id = user;
      this.storage.set('user_id', user_id.uid);
      this.navCtrl.setRoot(HomePage);
    })
    .catch(err => {
      console.log(err);
    })
  }
  register(){
    this.navCtrl.push('RegisterPage');
  }
   
}
