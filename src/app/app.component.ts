import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Editar Registo',
      url: '/edit-registo',
      icon: 'create-sharp'
    },
    {
      title: 'Mensagens',
      url: '/mensagens',
      icon: 'mail-outline'
    },
    {
      title: 'Comprar Premium',
      url: '/premium',
      icon: 'card-sharp'
    },
    {
      title: 'Histórico',
      url: '/historico',
      icon: 'newspaper-sharp'
    },
    {
      title: 'Definições',
      url: '/settings',
      icon: 'settings-sharp'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'log-out-sharp'
    },
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.afAuth.user.subscribe(user => {
        if (user) {
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/login']);
        }
      }, err => {
        this.router.navigate(['/login']);
      }, () => {
        this.splashScreen.hide();
      });
      this.statusBar.styleDefault();
    });
  }
/*
  public getUser(): User {
    var db = firebase.database().ref();
    
     var email = '';
     
    this.afAuth.user.subscribe( user => {
      if(user)
        email = user.email
    });
    
    db.child('user-list').orderByChild('email').equalTo(email).
  }
  */
}
