import { InternalException } from './internal.exception';

describe('InternalException', () => {
  it('should be defined', () => {
    expect(new InternalException()).toBeDefined();
  });
});
