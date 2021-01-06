import { useFormik } from "formik";
import { Dispatch } from "redux";
import { onPersonalFormSubmit } from "./personalForm.handlers";
import { personalFormInitialValues } from "./personalForm.initialValues";
import { personalFormSchema } from "./personalForm.schema";

export const usePersonalForm = (dispatch: Dispatch<any>) => {
  const formik = useFormik({
    initialValues: personalFormInitialValues,
    validationSchema: personalFormSchema,
    onSubmit: onPersonalFormSubmit(dispatch),
  });
  return formik;
};
