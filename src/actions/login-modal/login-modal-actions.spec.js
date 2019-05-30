import Actions from '../../reducers/actions';
import { closeLoginModal, swapModal } from '.';

describe('close login modal action', () => {
  const testActionType = Actions.login.closeLoginModal;
  it('should return a lambda that returns an object with the closeLoginModal action', () => {
    const actionValue = closeLoginModal();
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
