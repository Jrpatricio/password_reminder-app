import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IApp } from '../../models/apps.interfaces';

@IonicPage()
@Component({
  selector: 'page-app-details',
  templateUrl: 'app-details.html',
})
export class AppDetailsPage {

  app: IApp;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.app = this.navParams.get('app');
  }

  ionViewDidLoad() {
  }

  openModalEdit() {
    console.log('TODO Modal para edição dos dados')
  }

}
