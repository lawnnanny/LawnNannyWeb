import Actions from '../../reducers/actions';
import { closeSignupModal, swapModal } from '.';

describe('close login modal action', () => {
  const testActionType = Actions.login.closeSignupModal;
  it('should return a lambda that returns an object with the closeSignupModal action', () => {
    const actionValue = closeSignupModal();
    expect(actionValue).toEqual({ type: testActionType });
  });
});
describe('swap modal action', () => {
  const testActionType = Actions.login.swapModal;
  it('should return a lambda that returns an object with the swapModal action', () => {
    const actionValue = swapModal();
    expect(actionValue).toEqual({ type: testActionType });
  });
});
