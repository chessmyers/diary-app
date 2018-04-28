import { Component } from '@angular/core';
import { LogEntryService } from '../../services/log-entry';
import { Entry } from '../../models/entry';
import { NavController } from 'ionic-angular';
import { ViewEntryPage } from '../view-entry/view-entry';
import { EditEntryPage } from '../edit-entry/edit-entry';
import { SettingsService } from '../../services/settings';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-log',
  templateUrl: 'log.html',
})
export class LogPage {

    constructor(private logEntryService: LogEntryService, private navController: NavController,
      private settServ: SettingsService, private actionSheetController: ActionSheetController) {}

entries: Entry[] = [];
logCol = "light";
showEmpt = false;

  ionViewWillEnter() {
    this.entries = this.logEntryService.getEntries();
    this.checkCol();
    this.checkEmpt();
  }

  onRemoveEntry(index: number) {
    this.logEntryService.removeEntry(index);
    this.checkEmpt();
  }

  onEditEntry(index: number) {
    this.navController.push(EditEntryPage, index)
    }

  goToViewEntry(entry: Entry) {
    this.navController.push(ViewEntryPage, entry);
  }

  checkEmpt() {
    this.showEmpt = this.logEntryService.isLogEmpty();
  }

  checkCol() {
    this.logCol = this.settServ.checkAltBackground();
  }

  showSettings() {
    let actionSheet = this.actionSheetController.create({
      title: "Log Background Color",
      buttons: [
        {
          text: 'Light',
          handler: () => {
            this.logCol = 'light';
            this.settServ.setAltBackground(this.logCol);
          }
        },
        {
          text: 'Dark',
          handler: () => {
            this.logCol = 'dark';
            this.settServ.setAltBackground(this.logCol);
          }
        },
        {
          text: "Blue",
          handler: () => {
            this.logCol = 'fun';
            this.settServ.setAltBackground(this.logCol);
          }
        },
        {
          text: "Green",
          handler: () => {
            this.logCol = 'mellow';
            this.settServ.setAltBackground(this.logCol);
          }
        },
        {
          text: "Purple",
          handler: () => {
            this.logCol = 'royal';
            this.settServ.setAltBackground(this.logCol);
          }
        },
        {
          text: "Cancel",
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }


}
