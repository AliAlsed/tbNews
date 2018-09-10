import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { FCM } from '@ionic-native/fcm';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen , private fcm: FCM) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.fcm.subscribeToTopic('news');
      this.fcm.getToken().then(token => {
      });
      
      this.fcm.onNotification().subscribe(data => {
        if(data.wasTapped){
          alert( JSON.stringify(data) );
        } else {
          alert( JSON.stringify(data) );
        };
      });
      

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

