import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IApp } from '../../models/apps.interfaces';
import { AppsService } from '../../service/domain/apps.service';

@IonicPage()
@Component({
  selector: 'page-apps',
  templateUrl: 'apps.html',
})
export class AppsPage {
  apps: IApp[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public appsService: AppsService) {
  }

  ionViewDidLoad() {
    this.appsService.findAll().subscribe(res => {
      this.apps = res.apps
    });
  }

  goToNextPage(){
    this.navCtrl.push('HomePage');
  }

}
