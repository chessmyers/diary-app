import { Component } from '@angular/core';
import { Toggle } from 'ionic-angular';
import { SettingsService } from '../../services/settings';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private settServ: SettingsService) {}

  colors = ["maroon", "cyan", "lime", "lavender"];

  onToggle(toggle: Toggle) {
    this.settServ.setAltBackground("toggle.value");
  }

  checkAltBackground() {
    return this.settServ.checkAltBackground();
  }
}

    // page no longer used
