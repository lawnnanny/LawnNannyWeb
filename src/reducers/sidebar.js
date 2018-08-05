import Actions from './Actions';

const getInitialState = () => ({
  visible: false,
});

const setState = (previousState, property, newValue) =>
  Object.assign({}, previousState, {
    [property]: newValue,
  });

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case Actions.sidebar.setButton:
      return setState(state, 'visible', !state.visible);
    case Actions.sidebar.setSidebar:
      return setState(state, 'visible', false);
    default:
      return state;
  }
};
