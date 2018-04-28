import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { Entry } from '../../models/entry';

@Component({
  selector: 'page-view-entry',
  templateUrl: 'view-entry.html',
})
export class ViewEntryPage {

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

private data: Entry;
private title: string;
private date: string;
private mood: string;
private desc: string;

  ionViewWillEnter() {
    this.data = this.navParams.data;
    this.title = this.data.title;
    this.date = this.data.date;
    this.mood = this.data.mood;
    this.desc = this.data.desc;
    console.log(this.data);
    console.log(this.data.title)
    console.log(this.title);
    console.log(this.date);
  }
}
