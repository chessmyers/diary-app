import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Entry } from '../../models/entry';
import { LogEntryService } from '../../services/log-entry';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-edit-entry',
  templateUrl: 'edit-entry.html',
})
export class EditEntryPage {

  constructor(private navCtrl: NavController, private navParams: NavParams,
              private LEservice: LogEntryService) {
  }

  private index: number;
  private entry: Entry;
  private title: string;
  private date: string;
  private mood: string;
  private desc: string;

  private moods = ["Exciting", "Productive", "Disappointing", "Low-Energy", "Relaxing", "Exhausting", "Blissful", "Other"];

  ionViewWillEnter() {
    this.index = this.navParams.data;
    this.entry = this.LEservice.getEntry(this.index);
    this.title = this.entry.title;
    this.date = this.entry.date;
    this.mood = this.entry.mood;
    this.desc = this.entry.desc;
  }

  onAddItem(form: NgForm) {
      var e = new Entry(form.value.title,form.value.date,form.value.mood,form.value.description);
      this.LEservice.editEntry(this.index,e);
      this.LEservice.savaData();
      this.navCtrl.pop();
  }

}
