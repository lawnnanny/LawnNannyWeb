import Chance from 'chance';
import * as LoginActions from '../../src/actions/Login';
import Actions from '../../src/reducers/Actions';

describe('Login Actions', () => {
  let chance;

  const createFakeEvent = (value = chance.string()) => ({
    target: {
      value,
    },
  });

  beforeEach(() => {
    chance = Chance();
  });

  describe('Set Email', () => {
    it('is a function', () => {
      expect(LoginActions.setEmail).toEqual(expect.any(Function));
    });

    it('returns a dispatch function', () => {
      const dispatchFunction = LoginActions.setEmail(createFakeEvent());

      expect(dispatchFunction).toEqual(expect.any(Function));
    });

    it('dispatches an action', () => {
      const mockDispatch = jest.fn();
      const dispatchFunction = LoginActions.setEmail(createFakeEvent());

      dispatchFunction(mockDispatch);

      expect(mockDispatch).toHaveBeenCalled();
    });

    it('dispatches the correct action', () => {
      const mockDispatch = jest.fn();
      const fakeEventValue = chance.string();
      const dispatchFunction = LoginActions.setEmail(createFakeEvent(fakeEventValue));

      dispatchFunction(mockDispatch);

      const expectedAction = {
        type: Actions.login.setEmail,
        value: fakeEventValue,
      };

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe('Set Password', () => {
    it('is a function', () => {
      expect(LoginActions.setPassword).toEqual(expect.any(Function));
    });

    it('returns a dispatch function', () => {
      const dispatchFunction = LoginActions.setPassword(createFakeEvent());

      expect(dispatchFunction).toEqual(expect.any(Function));
    });

    it('dispatches an action', () => {
      const mockDispatch = jest.fn();
      const dispatchFunction = LoginActions.setPassword(createFakeEvent());

      dispatchFunction(mockDispatch);

      expect(mockDispatch).toHaveBeenCalled();
    });

    it('dispatches the correct action', () => {
      const mockDispatch = jest.fn();
      const fakeEventValue = chance.string();
      const dispatchFunction = LoginActions.setPassword(createFakeEvent(fakeEventValue));

      dispatchFunction(mockDispatch);

      const expectedAction = {
        type: Actions.login.setPassword,
        value: fakeEventValue,
      };

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe('Set First Name', () => {
    it('is a function', () => {
      expect(LoginActions.setFirstName).toEqual(expect.any(Function));
    });

    it('returns a dispatch function', () => {
      const dispatchFunction = LoginActions.setFirstName(createFakeEvent());

      expect(dispatchFunction).toEqual(expect.any(Function));
    });

    it('dispatches an action', () => {
      const mockDispatch = jest.fn();
      const dispatchFunction = LoginActions.setFirstName(createFakeEvent());

      dispatchFunction(mockDispatch);

      expect(mockDispatch).toHaveBeenCalled();
    });

    it('dispatches the correct action', () => {
      const mockDispatch = jest.fn();
      const fakeEventValue = chance.string();
      const dispatchFunction = LoginActions.setFirstName(createFakeEvent(fakeEventValue));

      dispatchFunction(mockDispatch);

      const expectedAction = {
        type: Actions.login.setFirstName,
        value: fakeEventValue,
      };

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe('Set Last Name', () => {
    it('is a function', () => {
      expect(LoginActions.setLastName).toEqual(expect.any(Function));
    });

    it('returns a dispatch function', () => {
      const dispatchFunction = LoginActions.setLastName(createFakeEvent());

      expect(dispatchFunction).toEqual(expect.any(Function));
    });

    it('dispatches an action', () => {
      const mockDispatch = jest.fn();
      const dispatchFunction = LoginActions.setLastName(createFakeEvent());

      dispatchFunction(mockDispatch);

      expect(mockDispatch).toHaveBeenCalled();
    });

    it('dispatches the correct action', () => {
      const mockDispatch = jest.fn();
      const fakeEventValue = chance.string();
      const dispatchFunction = LoginActions.setLastName(createFakeEvent(fakeEventValue));

      dispatchFunction(mockDispatch);

      const expectedAction = {
        type: Actions.login.setLastName,
        value: fakeEventValue,
      };

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe('Set Password Repeat', () => {
    it('is a function', () => {
      expect(LoginActions.setPasswordRepeat).toEqual(expect.any(Function));
    });

    it('returns a dispatch function', () => {
      const dispatchFunction = LoginActions.setPasswordRepeat(createFakeEvent());

      expect(dispatchFunction).toEqual(expect.any(Function));
    });

    it('dispatches an action', () => {
      const mockDispatch = jest.fn();
      const dispatchFunction = LoginActions.setPasswordRepeat(createFakeEvent());

      dispatchFunction(mockDispatch);

      expect(mockDispatch).toHaveBeenCalled();
    });

    it('dispatches the correct action', () => {
      const mockDispatch = jest.fn();
      const fakeEventValue = chance.string();
      const dispatchFunction = LoginActions.setPasswordRepeat(createFakeEvent(fakeEventValue));

      dispatchFunction(mockDispatch);

      const expectedAction = {
        type: Actions.login.setPasswordRepeat,
        value: fakeEventValue,
      };

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe('Set Address', () => {
    it('is a function', () => {
      expect(LoginActions.setAddress).toEqual(expect.any(Function));
    });

    it('returns a dispatch function', () => {
      const dispatchFunction = LoginActions.setAddress(createFakeEvent());

      expect(dispatchFunction).toEqual(expect.any(Function));
    });

    it('dispatches an action', () => {
      const mockDispatch = jest.fn();
      const dispatchFunction = LoginActions.setAddress(createFakeEvent());

      dispatchFunction(mockDispatch);

      expect(mockDispatch).toHaveBeenCalled();
    });

    it('dispatches the correct action', () => {
      const mockDispatch = jest.fn();
      const fakeEventValue = chance.string();
      const dispatchFunction = LoginActions.setAddress(createFakeEvent(fakeEventValue));

      dispatchFunction(mockDispatch);

      const expectedAction = {
        type: Actions.login.setAddress,
        value: fakeEventValue,
      };

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe('Set City', () => {
    it('is a function', () => {
      expect(LoginActions.setCity).toEqual(expect.any(Function));
    });

    it('returns a dispatch function', () => {
      const dispatchFunction = LoginActions.setCity(createFakeEvent());

      expect(dispatchFunction).toEqual(expect.any(Function));
    });

    it('dispatches an action', () => {
      const mockDispatch = jest.fn();
      const dispatchFunction = LoginActions.setCity(createFakeEvent());

      dispatchFunction(mockDispatch);

      expect(mockDispatch).toHaveBeenCalled();
    });

    it('dispatches the correct action', () => {
      const mockDispatch = jest.fn();
      const fakeEventValue = chance.string();
      const dispatchFunction = LoginActions.setCity(createFakeEvent(fakeEventValue));

      dispatchFunction(mockDispatch);

      const expectedAction = {
        type: Actions.login.setCity,
        value: fakeEventValue,
      };

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe('Set Address State', () => {
    it('is a function', () => {
      expect(LoginActions.setAddressState).toEqual(expect.any(Function));
    });

    it('returns a dispatch function', () => {
      const dispatchFunction = LoginActions.setAddressState(createFakeEvent());

      expect(dispatchFunction).toEqual(expect.any(Function));
    });

    it('dispatches an action', () => {
      const mockDispatch = jest.fn();
      const dispatchFunction = LoginActions.setAddressState(createFakeEvent());

      dispatchFunction(mockDispatch);

      expect(mockDispatch).toHaveBeenCalled();
    });

    it('dispatches the correct action', () => {
      const mockDispatch = jest.fn();
      const fakeEventValue = chance.string();
      const dispatchFunction = LoginActions.setAddressState({ value: fakeEventValue });

      dispatchFunction(mockDispatch);

      const expectedAction = {
        type: Actions.login.setAddressState,
        value: fakeEventValue,
      };

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe('Set Zipcode', () => {
    it('is a function', () => {
      expect(LoginActions.setZipcode).toEqual(expect.any(Function));
    });

    it('returns a dispatch function', () => {
      const dispatchFunction = LoginActions.setZipcode(createFakeEvent());

      expect(dispatchFunction).toEqual(expect.any(Function));
    });

    it('dispatches an action', () => {
      const mockDispatch = jest.fn();
      const dispatchFunction = LoginActions.setZipcode(createFakeEvent());

      dispatchFunction(mockDispatch);

      expect(mockDispatch).toHaveBeenCalled();
    });

    it('dispatches the correct action', () => {
      const mockDispatch = jest.fn();
      const fakeEventValue = chance.string();
      const dispatchFunction = LoginActions.setZipcode(createFakeEvent(fakeEventValue));

      dispatchFunction(mockDispatch);

      const expectedAction = {
        type: Actions.login.setZipcode,
        value: fakeEventValue,
      };

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe('Open Login Modal', () => {
    it('is a function', () => {
      expect(LoginActions.closeModal).toEqual(expect.any(Function));
    });

    it('returns a dispatch function', () => {
      const dispatchFunction = LoginActions.openLoginModal();

      expect(dispatchFunction).toEqual(expect.any(Function));
    });

    it('dispatches an action', () => {
      const mockDispatch = jest.fn();
      const dispatchFunction = LoginActions.openLoginModal();

      dispatchFunction(mockDispatch);

      expect(mockDispatch).toHaveBeenCalled();
    });

    it('dispatches an action', () => {
      const mockDispatch = jest.fn();
      const dispatchFunction = LoginActions.openLoginModal();

      dispatchFunction(mockDispatch);

      const expectedAction = {
        type: Actions.login.toggleLoginModal,
      };

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe('Open Signup Modal', () => {
    it('is a function', () => {
      expect(LoginActions.openSignupModal).toEqual(expect.any(Function));
    });

    it('returns a dispatch function', () => {
      const dispatchFunction = LoginActions.openSignupModal();

      expect(dispatchFunction).toEqual(expect.any(Function));
    });

    it('dispatches an action', () => {
      const mockDispatch = jest.fn();
      const dispatchFunction = LoginActions.openSignupModal();

      dispatchFunction(mockDispatch);

      expect(mockDispatch).toHaveBeenCalled();
    });

    it('dispatches an action', () => {
      const mockDispatch = jest.fn();
      const dispatchFunction = LoginActions.openSignupModal();

      dispatchFunction(mockDispatch);

      const expectedAction = {
        type: Actions.login.toggleSignupModal,
      };

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe('Close Modal', () => {
    it('is a function', () => {
      expect(LoginActions.closeModal).toEqual(expect.any(Function));
    });

    it('returns a dispatch function', () => {
      const dispatchFunction = LoginActions.closeModal();

      expect(dispatchFunction).toEqual(expect.any(Function));
    });

    it('dispatches an action', () => {
      const mockDispatch = jest.fn();
      const dispatchFunction = LoginActions.closeModal();

      dispatchFunction(mockDispatch);

      expect(mockDispatch).toHaveBeenCalled();
    });

    it('dispatches an action', () => {
      const mockDispatch = jest.fn();
      const dispatchFunction = LoginActions.closeModal();

      dispatchFunction(mockDispatch);

      const expectedAction = {
        type: Actions.login.clear,
      };

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
