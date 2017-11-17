const Actions = require('./Actions')();

const getInitialState = () => {
    return {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordRepeat: '',
        address: '',
        city: '',
        addressState: '',
        zipcode: '',
        driversLiscenseNumber: ''
    };
};

const setState = (previousState, property, newValue) => {
    return Object.assign({}, previousState, {
        [property]: newValue
    });
};

const clearPassword = previousState => {
    const stateAfterPasswordCleared = setState(previousState, 'password', '');

    return setState(stateAfterPasswordCleared, 'passwordRepeat', '');
};

export default (state = getInitialState(), action) => {
    switch(action.type) {
        case Actions.login.setEmail:
            return setState(state, 'email', action.value);
        case Actions.login.setPassword:
            return setState(state, 'password', action.value);
        case Actions.login.setFirstName:
            return setState(state, 'firstName', action.value);
        case Actions.login.setLastName:
            return setState(state, 'lastName', action.value);
        case Actions.login.setPasswordRepeat:
            return setState(state, 'passwordRepeat', action.value);
        case Actions.login.setAddress:
            return setState(state, 'address', action.value);
        case Actions.login.setCity:
            return setState(state, 'city', action.value);
        case Actions.login.setAddressState:
            return setState(state, 'addressState', action.value);
        case Actions.login.setZipcode:
            return setState(state, 'zipcode', action.value);
        case Actions.login.setDriversLiscenseNumber:
            return setState(state, 'driversLiscenseNumber', action.value);
        case Actions.login.clearPassword:
            return clearPassword(state);
        default:
            return state;
    }
};
