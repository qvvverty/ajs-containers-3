import Settings from '../settings';

const settings = new Settings();
const expectedSettingsMap = new Map([
  ['theme', 'light'],
  ['music', 'trance'],
  ['difficulty', 'easy'],
]);

test('Expect .addUserSetting to throw errors when option or value is inappropriate', () => {
  expect(() => settings.addUserSetting('godmode', 'on')).toThrow('Option incorrect');
  expect(() => settings.addUserSetting('music', 'country')).toThrow('Value incorrect');
});

test('Expect .addUserSetting not to add setting to userSettings Map if it is default', () => {
  settings.addUserSetting('music', 'trance');
  expect(settings.userSettings.has('music')).toBe(false);
});

test('Expect .addUserSetting to remove setting from userSettings Map if it was changed to default', () => {
  settings.addUserSetting('music', 'off');
  settings.addUserSetting('music', 'trance');
  expect(settings.userSettings.has('music')).toBe(false);
});

test('Expect .settings getter to return defaultSettings if there is no user settings added', () => {
  expect(settings.settings === settings.defaultSettings).toBe(true);
});

test('Expect .addUserSetting to add setting to appropriate Map container', () => {
  settings.addUserSetting('theme', 'light');
  expect(settings.userSettings.has('theme')).toBe(true);
});

test('Expect .settings getter to merge defaultSettings and userSettings in a right way', () => {
  expect(settings.settings).toEqual(expectedSettingsMap);
});
