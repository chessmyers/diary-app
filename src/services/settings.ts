export class SettingsService {
  private altBackground: string = "light";

  checkAltBackground() {
    return this.altBackground;
  }

  setAltBackground(col: string) {
    this.altBackground = col;
  }
}
