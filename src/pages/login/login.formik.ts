import { QueryLazyOptions } from "@apollo/client";
import { useFormik } from "formik";
import { onLoginSubmit } from "./login.handlers";
import { loginInitialValues } from "./login.initialValues";
import { loginSchema } from "./login.schema";

export const useLoginForm = (
  query: (options?: QueryLazyOptions<Record<string, any>>) => void
) => {
  const formik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginSchema,
    onSubmit: onLoginSubmit(query),
  });
  return formik;
};
