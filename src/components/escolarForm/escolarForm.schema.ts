import * as yup from "yup";
export const escolarFormSchema = yup.object().shape({
  ctrlNumber: yup.string().required("Este campo es obligatorio"),
  career: yup.string().required("Este campo es obligatorio"),
  creditsNumber: yup.number().required("Este campo es obligatorio"),
  creditsPercent: yup.number().required("Este campo es obligatorio"),
});
