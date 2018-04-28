import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';

import { Entry } from '../../models/entry';
import { LogEntryService } from '../../services/log-entry';

@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {

  constructor(private LEservice: LogEntryService, private storage: Storage) {}

  private moods = ["Exciting", "Productive", "Disappointing", "Low-Energy", "Relaxing", "Exhausting", "Blissful", "Other"];

  onAddItem(form: NgForm) {
      var e = new Entry(form.value.title,form.value.date,form.value.mood,form.value.description);
      this.LEservice.addEntry(e)
      form.reset();
  }

  clearForm(form: NgForm) {
    form.reset();
  }

}
