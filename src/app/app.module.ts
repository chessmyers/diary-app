import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { LogPage } from '../pages/log/log';
import { NewPage } from '../pages/new/new';
import { SettingsPage } from '../pages/settings/settings';
import { ViewEntryPage } from '../pages/view-entry/view-entry';
import { EditEntryPage } from '../pages/edit-entry/edit-entry';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LogPage,
    NewPage,
    SettingsPage,
    ViewEntryPage,
    EditEntryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LogPage,
    NewPage,
    SettingsPage,
    ViewEntryPage,
    EditEntryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
