import { InitFormState } from "./initFormStore/initForm.interfaces";

export interface RootStoreState {
  newData: InitFormState;
  step: number;
}
