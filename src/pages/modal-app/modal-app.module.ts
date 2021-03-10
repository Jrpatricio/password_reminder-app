import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalAppPage } from './modal-app';

@NgModule({
  declarations: [
    ModalAppPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalAppPage),
  ],
})
export class ModalAppPageModule {}
