import { Component } from '@angular/core';
import {  ViewController } from 'ionic-angular';
import { UserService } from "../../../../services/user/user.service";
@Component({
  templateUrl: 'reset-password.html'
})
export class ResetPassword {
  email: string;

  constructor(
    public viewCtrl: ViewController,
    public userService : UserService
  ) {
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  resetPassword(email){
    this.userService.fetchUser.resetPassword(email).then(user => {
      this.viewCtrl.dismiss();
    })
    .catch(err => {
      console.log(err);
    })
  }
}
