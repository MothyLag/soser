import { useFormik } from "formik";
import { Dispatch } from "redux";
import { onSubmitCompanyForm } from "./companyForm.handler";
import { companyFormInitialValues } from "./companyForm.initialValues";
import { companyFormSchema } from "./companyForm.schema";

export const useCompanyForm = (dispatch: Dispatch<any>) => {
  const formik = useFormik({
    initialValues: companyFormInitialValues,
    validationSchema: companyFormSchema,
    onSubmit: onSubmitCompanyForm(dispatch),
  });
  return formik;
};
