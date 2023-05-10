import React from "react";
import { ErrorMessage, Field, useField } from "formik";
import { convertBase64 } from "../../../../Utils/ImageConverter";

const DynamicFileInput = (props: any) => {
  const [field, meta] = useField(props);
  const { label, name, fieldData, formik } = props;
  // console.log("disableddisabled::", field, meta, label, name, fieldData, formik);
  // console.log("formik,disableddisabled", name, formik);
  return (
    <div className="mb-2">
      <label htmlFor={name}>{label}</label>
      <Field
        className={`form-control shadow-none ${meta.touched && meta.error && "is-invalid"}`}
        disabled={fieldData.disabled}
        label={label}
        {...field}
        {...props}
        autoComplete="off"
        onChange={async (event: React.ChangeEvent<HTMLInputElement>) => {
          formik?.setFieldValue(`${name}`, event.target.value);
          formik?.setFieldValue(`${name}base64`, await convertBase64(event?.currentTarget?.files && event?.currentTarget?.files[0]));
        }}
      />
      <ErrorMessage component="div" name={name} className="text-danger" />
    </div>
  );
};

export default DynamicFileInput;
// onChange={async (event) => {
//   // // console.log("convertBase64", await convertBase64(event.currentTarget.files[0]));
//   formik?.setFieldValue(`${name}base64`, await convertBase64(event.currentTarget.files[0]));
//   formik?.setFieldValue(`${name}`, event.currentTarget.files[0].name);
// }}
// setFieldValue={formik?.setFieldValue}
