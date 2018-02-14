import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../services/user/user.model";
import { UserService } from "../../services/user/user.service";
import { HomePage } from '../home/home';

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
  	public userService : UserService) {
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

}
