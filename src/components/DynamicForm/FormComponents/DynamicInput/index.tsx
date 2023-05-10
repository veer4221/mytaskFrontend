import React from "react";
import { ErrorMessage, Field, useField } from "formik";

const DynamicInput = (props: any) => {
  const [field, meta] = useField(props);
  const { label, name, fieldData } = props;
  // console.log("disableddisabled::", field, meta, label, name, fieldData);
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
      />
      <ErrorMessage component="div" name={name} className="text-danger" />
    </div>
  );
};

export default DynamicInput;
