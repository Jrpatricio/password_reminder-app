import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { IApp } from '../../models/apps.interfaces';


@IonicPage()
@Component({
  selector: 'page-modal-app',
  templateUrl: 'modal-app.html',
})
export class ModalAppPage {

  public showPassword: boolean = false;
  app: IApp;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private view: ViewController) {
    this.app = this.navParams.get('app');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAppPage', this.app);
  }

  closeModal() {
    const data = {
      name: 'John Doe',
      occupation: 'Milkman'
    };
    this.view.dismiss(data);
  }

  public onPasswordToggle(): void {
    this.showPassword = !this.showPassword;
  }

  
}
