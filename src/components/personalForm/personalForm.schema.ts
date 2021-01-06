import * as yup from "yup";
export const personalFormSchema = yup.object().shape({
  studentName: yup.string().required("Este campo es obligatorio"),
  studentGender: yup.string().required("Este campo es obligatorio"),
  studentPhone: yup
    .string()
    .required("Este campo es obligatorio")
    .length(10, "Introduce un Número de teléfono valido"),
  studentAddress: yup.string().required("Este campo es obligatorio"),
  studentAge: yup.number().required("Este campo es obligatorio"),
});
