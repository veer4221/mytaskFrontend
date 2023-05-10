import React, { useState, useEffect } from "react";
import { loginFormJSON } from "../../FormGenrate";
import DynamicForm from "../../components/DynamicForm";
import { useDispatch } from "react-redux";
import { setProductFormJSONAction } from "../../strore/actions/user.action";
import logo from "../../assets/images/mainlogoo.png";

import "./style.css";
import { setTransactionFormJSONAction } from "../../strore/actions";
import { TransactionFormJSON } from "../../FormGenrate/TransactionForm";
const TransactionForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formDataJSON, setFormDataJSON] = useState(TransactionFormJSON);
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(setTransactionFormJSONAction(TransactionFormJSON));
    // if (isLogin) return setFormDataJSON(loginFormJSON);
    // return setFormDataJSON(signupFormJSON);
    // console.log("hii", loginFormJSON);
  }, [isLogin]);
  return (
    <div className="login bg-chalchitram">
      <div className="login__container">
        {/* <img src={logo} alt="test" /> */}
        <DynamicForm formData={formDataJSON} isReRender={isLogin} />
        <div style={{ color: "black" }}></div>
      </div>
    </div>
  );
};

export default TransactionForm;
