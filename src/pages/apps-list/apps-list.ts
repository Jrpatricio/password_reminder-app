import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IApp } from '../../models/apps.interfaces';
import { AppsService } from '../../service/domain/apps.service';

@IonicPage()
@Component({
  selector: 'page-apps-list',
  templateUrl: 'apps-list.html',
})
export class AppsListPage {
  apps: IApp[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public appsService: AppsService) {
  }

  ionViewDidLoad() {
    this.loadAppData();
  }

  ionViewWillEnter() {
    this.loadAppData();
  }

  goToNextPage(app: IApp) {
    this.navCtrl.push('AppDetailsPage', { app: app });
  }

  private loadAppData() {
    this.appsService.findAll().subscribe(res => {
      this.apps = res.apps
    });
  }

}
