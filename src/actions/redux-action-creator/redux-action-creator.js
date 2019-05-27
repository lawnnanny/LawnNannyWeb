export const reduxActionCreator = actionType => data => ({ type: actionType, data });
export const reduxActionCreatorNoData = actionType => () => ({ type: actionType });
