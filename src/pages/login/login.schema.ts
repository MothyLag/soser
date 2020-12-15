import * as yup from "yup";

export const loginSchema = yup.object().shape({
  ctrlNumber: yup
    .string()
    .required("Favor de introducir el número de control")
    .length(8, "Introduzca un número de control válido"),
  password: yup.string().required("Favor de introducir la contraseña"),
});
