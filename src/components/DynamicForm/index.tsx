import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import FormComponents from "./FormComponents";
// import {
//   submitLoginFunction,
//   signupFunction,
//   submitSignupFunction,
//   submitAssignRoleFunction,
//   submitCreateProductFunction,
//   submitCreateRoleFunction,
// } from "../../utils/submitHandlerFunctions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FormJSON_Type } from "../../FormGenrate/formJSONType";
import FormComponents from "./FormComponents";
import { submitLoginFunction, submitTransactionFunction } from "../../Utils/onFormSubmit";
import { IMAGEUPLOAD } from "../../Utils/networkManger/api";

interface DynamicFormProps {
  formData: FormJSON_Type;
  isReRender: boolean;
}
const DynamicForm = ({ formData, isReRender }: DynamicFormProps) => {
  const navigate = useNavigate();
  //   const getUserInfo = useSelector((state) => state?.user?.getUserInfo);
  const submitHandle = async (values: any) => {
    // console.log("v::>", values);

    // alert();
    switch (formData["form-slug"]) {
      case "timeline-form-add":
        values.id = ` ${values.title}-${[...Array(20)].map((_) => (Math.random() * 10) | 0).join("") + ((1 + Math.random() * 9) | 0)}`

        if (values.imageUrl != "")
          values.imageUrl = values.imageUrl.split(" ").join("").split(",")
        if (values.videoURL != "")
          values.videoURL = values.videoURL.split(" ").join("").split(",")
        if (values.tagsList != "")
          values.tagsList = values.tagsList.split(",").map((d: any, i: any) => {
            return {
              id: `${d}-${i}-${d} `,
              name: d,
            };
          });
        const currentobj = JSON.parse(localStorage.getItem("currentTask") || "{}")
        currentobj.taskSubTimeLine.push(values)
        localStorage.setItem("currentTask", JSON.stringify(currentobj))

        return;
      case "login-form-user":
        (await submitLoginFunction(values)) && navigate("/en/TransactionForm");
        return;
      case "Transaction-form":
        (await submitTransactionFunction(values)) && navigate("/en/");
        return;
      case "AddTimeLine-form-FormJSON":
        try {
          const res = await IMAGEUPLOAD({ image: values?.IMAGEbase64 });
          // delete thisIsObject[key];

          try {
            // values.IMAGE = res?.data
            values = { ...values, IMAGE: res?.data };
            delete values?.IMAGEbase64;
          } catch (error) {
            console.log("test", error);
          }
          let timelines = JSON.parse(localStorage.getItem("timelines") || "[]");
          if (timelines && timelines.length > 0) {
            console.log("timelines", timelines);
            timelines.push(values);
            localStorage.setItem("timelines", JSON.stringify(timelines));
          } else {
            localStorage.setItem("timelines", JSON.stringify([values]));
          }
          return navigate("/en/MainTimeLine");
        } catch (error) {
          console.log("error: ", error);
        }

      //   case "user-role-assign-form-dynamic":
      //     (await submitAssignRoleFunction(values, getUserInfo?.id)) && navigate("/en/userList");
      //     return;
      //   case "product-form-dynamic":
      //     (await submitCreateProductFunction(values)) && navigate("/en/product");
      //     return;
      //   case "add-role-form-dynamic":
      //     (await submitCreateRoleFunction(values)) && navigate("/en/PermissionList");
      //     return;
    }
  };
  useEffect(() => {
    // console.log("useERKJVBSD,MFBVGM,SADF", formData);
  }, [isReRender]);
  return (
    <div className="container-fluid">
      <ToastContainer />
      <Formik
        enableReinitialize
        initialValues={Object.assign({}, ...formData?.Fields.map((x) => ({ [x.name]: x.initValue })))}
        validationSchema={Yup.object(Object.assign({}, ...formData?.Fields.map((x) => ({ [x.name]: x.validateField }))))}
        onSubmit={submitHandle}
      >
        {(formik) => {
          // console.log("formik::", formik);
          return (
            <div className="container-fluid p-3 mt-1" style={formData?.card?.style}>
              <div className="row">
                <div className="col12">
                  <h3>{formData?.formName}</h3>
                </div>
              </div>

              <Form>
                <div className="container-fluid ">
                  <div className="row">
                    {formData?.Fields?.map((field) => (
                      <FormComponents field={field} formik={formik} fieldStyle={formData?.fieldStyle} />
                    ))}
                  </div>

                  <div className="row">
                    <div className={`col - 12 d - flex justify - content - ${formData?.submitButton?.position || "end"} `}>
                      {formData?.resetButton?.required && (
                        <button className="btn mt-3 " type="reset" style={formData?.resetButton?.style}>
                          <span className="ml-3 ">{formData?.resetButton?.label}</span>
                        </button>
                      )}
                      <button className="btn  mt-3" type="submit" style={formData?.submitButton?.style}>
                        <span className="ml-3 ">{formData?.submitButton?.label}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default DynamicForm;
