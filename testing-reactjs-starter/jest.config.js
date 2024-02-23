const jestConfig = {
   "testEnvironment": "jsdom",
   setupFilesAfterEnv: ['./jest.setup.js'],
   moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '^@/(.*)$': '<rootDir>/src/$1',
   },
   transform: {
      '^.+\\.jsx?$': 'babel-jest',
   },
};

export default jestConfig;
