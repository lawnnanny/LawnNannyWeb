import { reduxActionCreator } from './redux-action-creator';


describe('redux action with data', () => {
  const testData = 'test';
  const testActionType = 'testActionType';
  it('should return a lambda that returns an object with data and action type', () => {
    const action = reduxActionCreator(testActionType);
    const actionValue = action(testData);
    expect(actionValue).toEqual({ type: testActionType, data: testData });
  });
});
describe('redux action with no data', () => {
  const testActionType = 'testActionType';
  it('should return a lambda that returns an object with an action type', () => {
    const action = reduxActionCreator(testActionType);
    const actionValue = action();
    expect(actionValue).toEqual({ type: testActionType });
  });
});
