import { MutationFunction } from "@apollo/client";
import { INewDataDTO } from "./questionnaire.interfaces";

export const onQuestionnaireSubmit = (mutate: MutationFunction) => (
  newData: INewDataDTO
) => mutate({ variables: { newData } });
