import React from "react";
import { ErrorMessage, Field, useField } from "formik";
import { selectOptionType } from "../../../../FormGenrate/formJSONType";

const DynamicSelect = (props: any) => {
  const [field, meta] = useField(props);
  const { label, name, fieldData } = props;
  // console.log("valuesSelect::", field, meta, label, name);
  return (
    <div className="mb-2">
      <label htmlFor={name}>{label}</label>
      <Field
        as="select"
        // style={props?.fieldStyle}
        label={label}
        {...field}
        disabled={fieldData.disabled}
        {...props}
        autoComplete="off"
        className={`form-control shadow-none ${meta.touched && meta.error && "is-invalid"}`}
      >
        <option value=""></option>
        {props?.fieldData?.options?.map((option: selectOptionType) => (
          <option style={{ color: "black" }} value={option?.value}>
            {option?.label}
          </option>
        ))}
      </Field>

      <ErrorMessage component="div" name={name} className="text-danger" />
    </div>
  );
};

export default DynamicSelect;
