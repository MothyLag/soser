import { Dispatch } from "redux";
import { INCREMENT_STEP, SAVE_ESCOLAR_FORM } from "../../utils/actions";

export const onEscolarFormSubmit = (dispatch: Dispatch<any>) => (data: any) => {
  dispatch({ type: SAVE_ESCOLAR_FORM, payload: { ...data } });
  dispatch({ type: INCREMENT_STEP });
};
