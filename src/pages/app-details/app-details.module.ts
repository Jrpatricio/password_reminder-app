import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppDetailsPage } from './app-details';

@NgModule({
  declarations: [
    AppDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AppDetailsPage),
  ],
})
export class AppDetailsPageModule {}
