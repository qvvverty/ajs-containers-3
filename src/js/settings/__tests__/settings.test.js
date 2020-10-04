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

test('Expect .addUserSetting to add setting to appropriate Map container', () => {
  settings.addUserSetting('theme', 'light');
  expect(settings.userSettings.has('theme')).toBe(true);
});

test('Expect .settings to merge defaultSettings and userSettings in a right way', () => {
  expect(settings.settings).toEqual(new Map(expectedSettingsMap));
});
