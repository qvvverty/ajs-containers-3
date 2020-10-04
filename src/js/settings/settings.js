export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.userSettings = new Map();
    this.availableSettings = new Map([
      ['theme', ['dark', 'light', 'gray']],
      ['music', ['trance', 'pop', 'rock', 'chillout', 'off']],
      ['difficulty', ['easy', 'normal', 'hard', 'nightmare']],
    ]);
  }

  addUserSetting(option, value) {
    if (!this.availableSettings.has(option)) {
      throw new Error('Option incorrect');
    }
    if (!this.availableSettings.get(option).includes(value)) {
      throw new Error('Value incorrect');
    }
    this.userSettings.set(option, value);
  }

  get settings() {
    const resultSettings = new Map();
    for (const setting of this.defaultSettings.keys()) {
      if (this.userSettings.has(setting)) {
        resultSettings.set(setting, this.userSettings.get(setting));
      } else {
        resultSettings.set(setting, this.defaultSettings.get(setting));
      }
    }
    return resultSettings;
  }
}
