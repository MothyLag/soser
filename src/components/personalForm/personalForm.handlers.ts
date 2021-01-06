import { Dispatch } from "redux";
import { INCREMENT_STEP, SAVE_PERSONAL_FORM } from "../../utils/actions";
import { PersonalFormDTO } from "./personalForm.interfaces";

export const onPersonalFormSubmit = (dispatch: Dispatch<any>) => (
  data: PersonalFormDTO
) => {
  dispatch({ type: SAVE_PERSONAL_FORM, payload: { ...data } });
  dispatch({ type: INCREMENT_STEP });
};
