import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sign-mobile',
  templateUrl: 'sign-mobile.html',
})
export class SignMobile {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignMobilePage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
