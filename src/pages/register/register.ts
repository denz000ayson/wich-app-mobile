import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user.model";
import { UserService } from "../../services/user.service";
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  register(user : User){
  	this.userService.userRegister.signUpWithEmail(user.email, user.password)
  		.then(res => {
  			console.log(res);
  		})
  		.catch(err => { console.log(err) })
  }

}
