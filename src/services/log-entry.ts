import { Entry } from '../models/entry';

export class LogEntryService {
  private entries: Entry[] = [];

  addEntry(entr: Entry) {
    this.entries.push(entr);
  }

  removeEntry(index: number) {
    this.entries.splice(index,1);
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

  isLogEmpty() {
    if (this.entries.length == 0) {
      return true;
    }
    else {
      return false;
    }
  }
  
}
