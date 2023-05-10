import React, { useState, useEffect } from "react";
import { loginFormJSON } from "../../FormGenrate";
import DynamicForm from "../../components/DynamicForm";
import { useDispatch } from "react-redux";
import { setProductFormJSONAction } from "../../strore/actions/user.action";
import logo from "../../assets/images/mainlogoo.png";

import "./style.css";
const AuthForms = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formDataJSON, setFormDataJSON] = useState(loginFormJSON);
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(setProductFormJSONAction(loginFormJSON));
    // if (isLogin) return setFormDataJSON(loginFormJSON);
    // return setFormDataJSON(signupFormJSON);
    // console.log("hii", loginFormJSON);
  }, [isLogin]);
  return (
    <div className="login bg-chalchitram">
      <div className="login__container">
        <img src={logo} alt="test" />
        <DynamicForm formData={formDataJSON} isReRender={isLogin} />
      </div>
    </div>
  );
};

export default AuthForms;
