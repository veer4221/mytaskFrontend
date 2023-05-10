/* eslint-disable default-case */

import { userContants } from "../constants";
import { actionTsType, initStateUserType } from "./reducerType";

const initState = {
  error: null,
  message: "",
  getUserInfo: {},
  loading: false,
  userState: {},
  userRoleAssignForm: {
    isChange: new Date(),
    formJson: {},
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state: initStateUserType = initState, action: actionTsType) => {
  switch (action.type) {
    case userContants.LOGIN_FORM_SET_JSON:
      state = {
        ...state,
        loading: true,
        loginForm: {
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
