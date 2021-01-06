import * as yup from "yup";

export const companyFormSchema = yup.object().shape({
  companyName: yup.string().required("Este campo es obligatorio"),
  companyAddress: yup.string().required("Este campo es obligatorio"),
  companyPhone: yup.string().required("Este campo es obligatorio"),
  companyRFC: yup.string().required("Este campo es obligatorio"),
  companyDepartment: yup.string().required("Este campo es obligatorio"),
  headDepartment: yup.string().required("Este campo es obligatorio"),
});
