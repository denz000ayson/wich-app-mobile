import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import "rxjs/Rx"
@Injectable()
export class UserService {
	constructor(private afAuth : AngularFireAuth) { }
			userRegister = {
				signUpWithEmail :  (userDetails) => {
						return new Promise((resolve, reject) => {
							this.afAuth.auth.createUserWithEmailAndPassword(userDetails.email, userDetails.password).then(user => {
								resolve(user);
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
					this.afAuth.auth.signInWithEmailAndPassword(userAuth.email, userAuth.password).then(user => {
						resolve(user);
					})
					.catch(err => {
						reject(err);
					})
				})
			} // return login user email and password
		}

}
