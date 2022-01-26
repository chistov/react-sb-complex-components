module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  modulePathIgnorePatterns: ["<rootDir>/src/stories"],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/src/jest/styleMock.js',
  },
  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: 'jsdom'

};
