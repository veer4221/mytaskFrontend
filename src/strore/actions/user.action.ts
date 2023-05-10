import { Dispatch } from "redux";
import { userContants } from "../constants";
import { FormJSON_Type } from "../../FormGenrate/formJSONType";

export const setProductFormJSONAction = (jsonData: FormJSON_Type) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: userContants.LOGIN_FORM_SET_JSON,
      payload: jsonData,
    });
  };
};
