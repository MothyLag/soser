import { MutationFunction } from "@apollo/client";
import { useFormik } from "formik";
import { signUpSubmitHandle } from "./signUp.handle";
import { signUpInitialValues } from "./signUp.initialValues";
import { signUpSchema } from "./signUp.schema";

export const useSignUp = (mutate: MutationFunction) => {
  const formik = useFormik({
    initialValues: signUpInitialValues,
    validationSchema: signUpSchema,
    onSubmit: signUpSubmitHandle(mutate),
  });
  return formik;
};
