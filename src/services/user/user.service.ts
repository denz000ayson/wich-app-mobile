import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './user.model';
import { AngularFireDatabase, AngularFireList, FirebaseObjectObservable } from 'angularfire2/database';
import "rxjs/Rx"
@Injectable()
export class UserService {
	user = {} as User;
	userList: AngularFireList<any>;
  selectedUser: user;
  profileData : FirebaseObjectObservable<Profiles>
	constructor(
		private firebaseAuth : AngularFireAuth,
		private firebaseList : AngularFireDatabase
		) { }
	getData() {
    this.userList = this.firebaseList.list('profiles');
    return this.userList;
  }		
	userRegister = {
		signUpWithEmail :  (userForm) => {
				return new Promise((resolve, reject) => {
					this.firebaseAuth.auth.createUserWithEmailAndPassword(userForm.email, userForm.password).then(userDb => {
						resolve(userDb);
						this.firebaseList.object(`profiles/${userDb.uid}`).set(userForm).then((profile) =>{
							resolve(profile)
						})
						.catch(err => {
							reject(err);
						});
					})
					.catch(err => {
						reject(err);
					});
			}); 
		}, // return authenticated user email and password
	}
userLogin = {
	signInWithEmail : (userAuth) => {
		return new Promise((resolve, reject) => {
			this.firebaseAuth.auth.signInWithEmailAndPassword(userAuth.email, userAuth.password).then(userDb => {
				resolve(userDb);
			})
			.catch(err => {
				reject(err);
			});
		});
	}, // return login user email and password
}
fetchUser = {
	viewUser : (user_id) => {
		return new Promise((resolve, reject) =>{
			// console.log(this.firebaseList.object(`profiles/${user_id}`));
				this.profileData = this.firebaseList.object(`profiles/${user_id}`);
				console.log(this.profileData);
				resolve(this.profileData);
		})
	}
}

}
