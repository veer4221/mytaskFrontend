import { Dispatch } from "redux";
import { authConstants } from "../constants";
import { FormJSON_Type } from "../../FormGenrate/formJSONType";

export const setAuthLoginFormJSONAction = (jsonData: FormJSON_Type) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: authConstants.LOGIN_FORM_SET_JSON,
      payload: jsonData,
    });
  };
};
export const setTransactionFormJSONAction = (jsonData: FormJSON_Type) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: authConstants.TRANSACTION_FORM_JSON,
      payload: jsonData,
    });
  };
};
