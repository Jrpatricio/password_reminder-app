import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';
import { ICredentials } from '../../models/credentials.interfaces';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  credentials: ICredentials = {
    email: "",
    password: ""
  };

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  login() {
    console.log(this.credentials)
    this.navCtrl.setRoot('AppsListPage')
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

}
