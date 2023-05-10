/* eslint-disable default-case */

import { authConstants, userContants } from "../constants";
import { actionTsType, initStateUserType } from "./reducerType";

const initState = {
  error: null,
  message: "",
  getUserInfo: {},
  loading: false,
  userState: {},
  transactionForm: {
    isChange: new Date(),
    formJson: {},
  },
  userRoleAssignForm: {
    isChange: new Date(),
    formJson: {},
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state: initStateUserType = initState, action: actionTsType) => {
  switch (action.type) {
    case authConstants.LOGIN_FORM_SET_JSON:
      state = {
        ...state,
        loading: true,
        loginForm: {
          ...state.loginForm,
          formJson: action.payload,
        },
      };
      break;
    case authConstants.TRANSACTION_FORM_JSON:
      state = {
        ...state,
        loading: true,
        transactionForm: {
          ...state.loginForm,
          formJson: action.payload,
        },
      };
      break;

    default: {
      return state;
    }
  }

  return state;
};
