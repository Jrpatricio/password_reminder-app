import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { IApp } from '../../models/apps.interfaces';

@IonicPage()
@Component({
  selector: 'page-app-details',
  templateUrl: 'app-details.html',
})
export class AppDetailsPage {

  public showPassword: boolean = false;
  app: IApp;
  enableEdit: boolean = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalController: ModalController) {
    this.app = this.navParams.get('app');
  }

  ionViewDidLoad() {
    console.log('HAAHA');
  }

  openModalEdit() {
    let profileModal = this.modalController.create('ModalAppPage', {app: this.app});
    profileModal.present();

    profileModal.onDidDismiss(data => {  
      console.log(data);
    });
  }

  public onPasswordToggle(): void {
    this.showPassword = !this.showPassword;
  }
}
