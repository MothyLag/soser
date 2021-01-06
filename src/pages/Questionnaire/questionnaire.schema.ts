import * as yup from "yup";
export const questionnaireSchema = yup.object().shape({
  studentName: yup.string().required("Este campo es obligatorio"),
  studentGender: yup.string().required("Este campo es obligatorio"),
  studentPhone: yup.string().required("Este campo es obligatorio"),
  studentAddress: yup.string().required("Este campo es obligatorio"),
  studentAge: yup.number().required("Este campo es obligatorio"),
  ctrlNumber: yup.string().required("Este campo es obligatorio"),
  career: yup.string().required("Este campo es obligatorio"),
  creditsNumber: yup.number().required("Este campo es obligatorio"),
  creditsPercent: yup.number().required("Este campo es obligatorio"),
});
