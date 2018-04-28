import { Entry } from '../models/entry';
// import { Storage } from '@ionic/storage';

export class LogEntryService {



  private entries: Entry[] = [];
  private numEntries: number = 0;

  addEntry(entr: Entry) {
    this.entries.push(entr);
    this.numEntries += 1;
  }

  removeEntry(index: number) {
    this.entries.splice(index,1);
    this.numEntries -= 1;
  }

  getEntries() {
    return this.entries;
  }

  getEntry(index: number) {
    return this.entries[index];
  }

  editEntry(index: number, entry:Entry) {
      this.entries.splice(index, 1, entry);
  }

  loadData() {
    // this.storage.get('numEntr').then((val) => {
    //   this.numEntries = val;
    // }).catch (error=> {
    //   this.numEntries = 0;
    // });
    // for (var i = 0; i < this.numEntries; i++) {
    //   this.storage.get(i.toString()).then((val) => {
    //     this.entries.push(val);
    //   }).catch (error=> {
    //     console.log("Couldn't find data")
    //   });
    // }
    console.log("test");
  }

  savaData() {
    // for (var i = 0; i < this.numEntries; i++) {
    //   this.storage.set(i.toString(), this.entries[i]);
    // }
    // this.storage.set('numEntr', this.numEntries);
    console.log("test");
  }

  isLogEmpty() {
    if (this.entries.length == 0) {
      return true;
    }
    else {
      return false;
    }
  }

}
