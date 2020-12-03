const baseConfig = require('./jest.config')

module.exports = {
  ...baseConfig,
  name: 'Storyshots',
  displayName: 'storyshots',
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  testMatch: ['<rootDir>/test/Storyshots.test.ts'],
}
