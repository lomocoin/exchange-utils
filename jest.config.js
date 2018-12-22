module.exports = {
  preset: 'ts-jest',
  verbose: true,
  setupFiles: ['<rootDir>/jest.setup.js'],
  testMatch: ['(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    'ts-jest': {
      tsConfigFile: '<rootDir>/tsconfig.json',
    },
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-vector-icons|react-native-config|react-native-i18n|mobx-react)/)',
  ],
  modulePaths: ['<rootDir>'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
