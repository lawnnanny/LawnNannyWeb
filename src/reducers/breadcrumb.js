import Actions from "./Actions";

const getInitialState = () => ({
  requestActive: false,
  detailsActive: false,
  locationActive: false,
  priceActive: false,
  reviewActive: false,
  requestCompleted: false,
  detailsCompleted: false,
  locationCompleted: false,
  priceCompleted: false,
  reviewCompleted: false
});

const setState = (previousState, property, newValue) =>
  Object.assign({}, previousState, {
    [property]: newValue
  });

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case Actions.breadcrumb.toggleRequestActive:
      return setState(state, "requestActive", !state.requestActive);
    case Actions.breadcrumb.toggleDetailsActive:
      return setState(state, "detailsActive", !state.detailsActive);
    case Actions.breadcrumb.toggleLocationActive:
      return setState(state, "locationActive", !state.locationActive);
    case Actions.breadcrumb.togglePriceActive:
      return setState(state, "priceActive", !state.priceActive);
    case Actions.breadcrumb.toggleReviewActive:
      return setState(state, "reviewActive", !state.reviewActive);
    case Actions.breadcrumb.toggleRequestCompleted:
      return setState(state, "requestCompleted", !state.requestCompleted);
    case Actions.breadcrumb.toggleDetailsCompleted:
      return setState(state, "detailsCompleted", !state.detailsCompleted);
    case Actions.breadcrumb.toggleLocationCompleted:
      return setState(state, "locationCompleted", !state.locationCompleted);
    case Actions.breadcrumb.togglePriceCompleted:
      return setState(state, "priceCompleted", !state.priceCompleted);
    case Actions.breadcrumb.toggleReviewCompleted:
      return setState(state, "reviewCompleted", !state.reviewCompleted);
    default:
      return state;
  }
};
