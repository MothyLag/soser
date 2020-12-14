import * as yup from "yup";
export const signUpSchema = yup.object().shape({
  name: yup.string().required("este campo es obligatorio"),
  lastName: yup.string().required("este campo es obligatorio"),
  ctrlNumber: yup
    .string()
    .length(8, "debe introducir un número de control valido")
    .required("este campo es obligatorio"),
  password: yup
    .string()
    .required("este campo es obligatorio")
    .length(4, "la contraseña debe ser de 4 digitos"),
  confirmPassword: yup.string().when("password", {
    is: (val: any) => (val && val.length > 0 ? true : false),
    then: yup
      .string()
      .oneOf([yup.ref("password")], "las contraseñas deben coincidir"),
  }),
  email: yup.string().email("introduce una dirección de correo valida"),
});
