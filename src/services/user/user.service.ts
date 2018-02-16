import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './user.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Facebook } from '@ionic-native/facebook';
import "rxjs/Rx";

//we use main firebase plugin for facebook login
import firebase from 'firebase';

@Injectable()
export class UserService {
	user = {} as User;
	userList: AngularFireList<any>;
	constructor(
		private firebaseAuth : AngularFireAuth,
		private firebaseList : AngularFireDatabase,
		private fb : Facebook
		) { }
	getData() {
    this.userList = this.firebaseList.list('profiles');
    return this.userList;
  }		
	userRegister = {
		signUpWithEmail :  (userForm) => {
				return new Promise((resolve, reject) => {
					this.firebaseAuth.auth.createUserWithEmailAndPassword(userForm.email, userForm.password).then(userDb => {
						this.firebaseList.object(`profiles/${userDb.uid}`).set(userForm).then((profile) =>{
							resolve(userDb)
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

	signInWithFaceBook : () => {
		return new Promise((resolve, reject) => {
			// let provider = new firebase.auth.FacebookAuthProvider();
			// firebase.auth().signInWithRedirect(provider).then(() => {
			// 	firebase.auth().getRedirectResult().then((result) => {
			// 		resolve(result);
			// 	})
			// 	.catch(err => {
			// 		reject(err);
			// 	})
			// })
			// .catch(err => {
			// 	reject(err);
			// })
			this.fb.login(["email"]).then((res) => {
				// console.log(new firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken));
				let credential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
				this.firebaseAuth.auth.signInWithCredential(credential).then((info) => {
						resolve(info);
				})
			})
		})
	}
}
fetchUser = {
	viewUser : (user_id) => {
			// console.log(user_id)
		return new Promise((resolve, reject) =>{
			this.firebaseList.database.ref(`profiles/${user_id}`).on('value', profile => {
				 resolve(profile.val());
			}, err => {
  			reject(err);
			});
		})
	}, // fetch user by ObjectKey
	resetPassword : (email) =>{
		return new Promise((resolve, reject) => {
			this.firebaseAuth.auth.sendPasswordResetEmail(email).then(user => {
				resolve(user);
			})
			.catch(err =>{
				reject(err);
			})
		})
	} // reset password
}

}
