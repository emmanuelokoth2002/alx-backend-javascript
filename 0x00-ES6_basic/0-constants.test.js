// 0-constants.test.js

import { taskFirst, getLast, taskNext } from './0-constants';

describe('taskFirst function', () => {
  it('should return the expected string', () => {
    expect(taskFirst()).toBe('I prefer const when I can.');
  });
});

describe('getLast function', () => {
  it('should return the expected string', () => {
    expect(getLast()).toBe(' is okay');
  });
});

describe('taskNext function', () => {
  it('should return the expected string', () => {
    expect(taskNext()).toBe('But sometimes let is okay');
  });
});
