import { MutationFunction } from "@apollo/client";
import { useFormik } from "formik";
import { onQuestionnaireSubmit } from "./questionnaire.handlers";
import { questionnaireInitialValues } from "./questionnaire.initialValues";
import { questionnaireSchema } from "./questionnaire.schema";

export const useQuestionnaire = (mutate: MutationFunction) => {
  const formik = useFormik({
    initialValues: questionnaireInitialValues,
    validationSchema: questionnaireSchema,
    onSubmit: onQuestionnaireSubmit(mutate),
  });
  return formik;
};
