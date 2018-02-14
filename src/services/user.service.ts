import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import "rxjs/Rx"
@Injectable()
export class UserService {
	constructor(private afAuth : AngularFireAuth) { }
			userRegister = {
				signUpWithEmail :  (email : string, password : string) => {
						return new Promise(resolve => {
							this.afAuth.auth.createUserWithEmailAndPassword(email,password).then(user => {
								resolve(user);
							})
							.catch(err => {
								resolve(err);
							});
					}); 
				}, // return authenticated user email and password
			}
	

}
