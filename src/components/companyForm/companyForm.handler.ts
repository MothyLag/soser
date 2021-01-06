import { Dispatch } from "redux";
import { INCREMENT_STEP, SAVE_COMPANY_FORM } from "../../utils/actions";

export const onSubmitCompanyForm = (dispatch: Dispatch<any>) => (
  escolarData: any
) => {
  dispatch({ type: SAVE_COMPANY_FORM, payload: escolarData });
  dispatch({ type: INCREMENT_STEP });
};
