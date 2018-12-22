jest.mock('uuid/v4', () => ({
  default: jest.fn(() => '00000000-0000-0000-0000-000000000000'),
}));

jest.mock('./src/injectStores', () => ({
  default: jest.fn(),
}));
