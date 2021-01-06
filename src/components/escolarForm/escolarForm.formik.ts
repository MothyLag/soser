import { useFormik } from "formik";
import { Dispatch } from "redux";
import { onEscolarFormSubmit } from "./escolarForm.handlers";
import { escolarFormInitialValues } from "./escolarForm.initialValues";
import { escolarFormSchema } from "./escolarForm.schema";

export const useEscolarForm = (dispatch: Dispatch<any>) => {
  const formik = useFormik({
    initialValues: escolarFormInitialValues,
    validationSchema: escolarFormSchema,
    onSubmit: onEscolarFormSubmit(dispatch),
  });
  return formik;
};
