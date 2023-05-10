import { FieldTypes } from "../../Utils/staticObj";
import * as Yup from "yup";

// export const loginFormJSON = {
//   ["form-slug"]: "signup-form-user",
//   formName: "SignUp ",
//   formPosition: "start",
//   card: {
//     style: {
//       background: "#121417",
//       color: "#c5bdbd",
//     },
//     shadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
//   },
//   fieldStyle: {
//     background: "#83839421",
//     labelColor: "white",
//     color: "white",
//   },
//   submitButton: {
//     label: "SignUp",
//     position: "around",
//     style: {
//       background: "#00800085",
//       color: "white",
//       paddingLeft: "20px",
//       paddingRight: "20px",
//     },
//   },
//   resetButton: {
//     required: true,
//     label: "Reset",
//     style: {
//       background: "#d04040",
//       color: "white",
//       paddingLeft: "20px",
//       paddingRight: "20px",
//     },
//   },
//   Fields: [
//     {
//       initValue: "",
//       validateField: Yup.string().max(15, "Must be 15 characters or less").required("First Name is Requird"),
//       fieldType: FieldTypes.TEXT,
//       label: "First Name",
//       placeholder: "First Name",
//       name: "firstName",
//       fildSize: {
//         md: "6",
//         xs: "12",
//         sm: "12",
//         lg: "6",
//       },
//     },
//     // {
//     //   initValue: "",
//     //   validateField: Yup.string()
//     //     .max(15, "Must be 15 characters or less")
//     //     .required("Middle Name is Requird"),
//     //   fieldType: FieldTypes.TEXT,
//     //   label: "Middle Name",
//     //   placeholder: "First Name",
//     //   name: "middlename",
//     //   fildSize: {
//     //     md: "4",
//     //     xs: "12",
//     //     sm: "12",
//     //     lg: "4",
//     //   },
//     // },
//     {
//       initValue: "",
//       validateField: Yup.string().max(15, "Must be 15 characters or less").required("Last Name is Requird"),
//       fieldType: FieldTypes.TEXT,
//       label: "Last Name",
//       placeholder: "Last Name",
//       name: "lastName",
//       fildSize: {
//         md: "6",
//         xs: "12",
//         sm: "12",
//         lg: "6",
//       },
//     },
//     {
//       initValue: "",
//       validateField: Yup.string().email("Enter valid Email").required("Email is Requird"),
//       fieldType: FieldTypes.EMAIL,
//       label: "Email",
//       placeholder: "Email",
//       name: "email",
//       fildSize: {
//         md: "6",
//         xs: "12",
//         sm: "12",
//         lg: "6",
//       },
//     },
//     {
//       initValue: "",
//       validateField: Yup.string().required("Password is Requird"),
//       fieldType: FieldTypes.PASSWORD,
//       label: "Password",
//       placeholder: "Password",
//       name: "password",
//       fildSize: {
//         md: "6",
//         xs: "12",
//         sm: "12",
//         lg: "6",
//       },
//     },

//     {
//       initValue: "",
//       validateField: Yup.string()
//         .required("Mobilenumber is Requird")
//         .matches(
//           /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
//           "Phone number is not valid"
//         ),
//       fieldType: FieldTypes.TEXT,
//       label: "Phone Number",
//       placeholder: "mobileNumber",
//       name: "mobileNumber",
//       fildSize: {
//         md: "6",
//         xs: "12",
//         sm: "12",
//         lg: "6",
//       },
//     },

//     {
//       initValue: "",
//       validateField: Yup.string().required("UserName is Requird"),
//       fieldType: FieldTypes.TEXT,
//       label: "User Name",
//       placeholder: "UserName",
//       name: "userName",
//       fildSize: {
//         md: "6",
//         xs: "12",
//         sm: "12",
//         lg: "6",
//       },
//     },
//     // {
//     //   initValue: "",
//     //   validateField: Yup.string().required("Birthdate is Requird"),
//     //   fieldType: FieldTypes.DATE,
//     //   label: "BirthDate",
//     //   placeholder: "birthDate",
//     //   name: "birthDate",
//     //   fildSize: {
//     //     md: "6",
//     //     xs: "12",
//     //     sm: "12",
//     //     lg: "6",
//     //   },
//     // },
//     {
//       initValue: "",
//       validateField: Yup.string().required("Study is required!"),
//       fieldType: FieldTypes.SELECT,
//       label: "Study",
//       placeholder: "Study",
//       name: "study",
//       fildSize: {
//         md: "6",
//         xs: "12",
//         sm: "12",
//         lg: "6",
//       },
//       options: [
//         {
//           label: "10 Pass",
//           value: "10pass",
//         },
//         {
//           label: "12 Pass",
//           value: "12pass",
//         },
//         {
//           label: "Graduate",
//           value: "graduate",
//         },
//         {
//           label: "Post Graduate",
//           value: "postgraduate",
//         },
//         {
//           label: "test4",
//           value: "test4",
//         },
//       ],
//     },
//   ],
// };

export const loginFormJSON = {
  ["form-slug"]: "login-form-user",
  formName: "Login ",
  formPosition: "start",
  card: {
    style: {
      background: "#121417",
      color: "#c5bdbd",
    },
    shadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  },
  fieldStyle: {
    background: "#83839421",
    labelColor: "white",
    color: "white",
  },
  submitButton: {
    label: "Login",
    position: "around",
    style: {
      background: "#00800085",
      color: "white",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
  resetButton: {
    required: true,
    label: "Reset",
    style: {
      background: "#d04040",
      color: "white",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
  Fields: [
    {
      initValue: "",
      validateField: Yup.string().email("Enter valid Email").required("Email is Requird"),
      fieldType: FieldTypes.EMAIL,
      label: "Email",
      placeholder: "Email",
      name: "email",
      fildSize: {
        md: "6",
        xs: "12",
        sm: "12",
        lg: "6",
      },
    },
    {
      initValue: "",
      validateField: Yup.string().required("Password is Requird"),
      fieldType: FieldTypes.PASSWORD,
      label: "Password",
      placeholder: "Password",
      name: "password",
      fildSize: {
        md: "6",
        xs: "12",
        sm: "12",
        lg: "6",
      },
    },
  ],
};
