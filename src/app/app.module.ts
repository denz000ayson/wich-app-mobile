//Modules
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CONFIG_FIREBASE } from '../shared/config';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

//Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

//Modals
import { SignEmail } from '../pages/register/modal/sign-email/sign-email';
import { SignMobile } from '../pages/register/modal/sign-mobile/sign-mobile';
import { ResetPassword } from '../pages/login/modal/reset-password/reset-password';

//Providers
import { UserService } from '../services/user/user.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    //Modals
    SignEmail,
    SignMobile,
    ResetPassword

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(CONFIG_FIREBASE),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    //Modals
    SignEmail,
    SignMobile,
    ResetPassword
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService
  ]
})
export class AppModule {}
