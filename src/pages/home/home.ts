import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { User, Profiles } from "../../services/user/user.model";
import { UserService } from "../../services/user/user.service";
import { AngularFireDatabase, AngularFireList, FirebaseObjectObservable } from 'angularfire2/database';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	user = {} as User;
	profile = {} as Profiles;
	profileData : FirebaseObjectObservable<Profiles>
  constructor(
  	public navCtrl: NavController,
  	public storage : Storage,
  	public userService : UserService,
		private firebaseList : AngularFireDatabase
  	) {
  }
  ionViewDidEnter() {
	  this.storage.get('user_id').then(user_id => {
	  	this.profileData = this.firebaseList.object(`profiles/${user_id}`);
	  	console.log(this.profileData);
	  			// this.userService.fetchUser.viewUser(user_id).then(user => {
	  			// 	console.log(user);
	  			// })
	  			// .catch(err => {
	  			// 	console.log(err);
	  			// })
	  		// }
	  });
  }
}
