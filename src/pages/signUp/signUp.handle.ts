import { MutationFunction } from "@apollo/client";
import { IUserDTO } from "./signUp.interfaces";

export const signUpSubmitHandle = (mutate: MutationFunction) => (
  user: IUserDTO
) =>
  mutate({
    variables: { user: { ...user, ctrlNumber: user.ctrlNumber.toString() } },
  });
