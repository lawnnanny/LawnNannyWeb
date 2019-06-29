import { LawnnannyapiBridge } from './LawnnannyApiBridge';

describe('LawnnannyapiBridge', () => {
  it('Should have login', () => {
    expect(typeof LawnnannyapiBridge.registerUser).toEqual('function');
  });

  it('Should return a promise', () => {
    expect(Object.prototype.toString.call(LawnnannyapiBridge.registerUser())).toEqual('[object Promise]');
  });
});
