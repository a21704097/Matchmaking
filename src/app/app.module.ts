import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';


const firebaseConfig = {
  apiKey: 'AIzaSyAUzcRrHz3qGbCjgwO74NbcaKaN_FBhSxM',
  authDomain: 'matchmaking-93eba.firebaseapp.com',
  databaseURL: 'https://matchmaking-93eba.firebaseio.com',
  projectId: 'matchmaking-93eba',
  storageBucket: 'matchmaking-93eba.appspot.com',
  messagingSenderId: '890944746040',
  appId: '1:890944746040:web:3232b63b337fbd40ca6ccd',
  measurementId: 'G-LY4Y0WFVZ3'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})




export class AppModule {}
