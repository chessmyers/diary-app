import { Component } from '@angular/core';

import { LogPage } from '../log/log';
import { NewPage } from '../new/new';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  logPage = LogPage;
  newPage = NewPage;

}
