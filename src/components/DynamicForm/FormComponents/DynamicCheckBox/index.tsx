import React from "react";
import { ErrorMessage, Field, useField } from "formik";
const DynamicCheckBox = (props: any) => {
  const [field, meta] = useField(props);
  const { label, name, fieldData } = props;
  // console.log("values::", field, meta, label, name);
  return (
    <div className="mb-2">
      {/* <label htmlFor={name}>{label}</label> */}
      <div className="d-flex">
        <div className="d-flex">
          <div className="pt-1">
            <Field
              className={` ${meta.touched && meta.error && "is-invalid"}`}
              type={props?.fieldData?.fieldType}
              name={name}
              disabled={fieldData.disabled}
              style={{ width: "17px", height: "17px" }}
            />
          </div>
          <span className="mx-1">{label}</span>
        </div>
      </div>

      <ErrorMessage component="div" name={name} className="text-danger" />
    </div>
  );
};

export default DynamicCheckBox;
