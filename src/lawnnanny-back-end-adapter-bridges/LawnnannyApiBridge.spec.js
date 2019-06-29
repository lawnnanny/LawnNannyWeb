import { registerUser } from './LawnnannyApiBridge';

describe('LawnnannyapiBridge', () => {
  it('Should have login', () => {
    expect(typeof registerUser).toEqual('function');
  });
});
