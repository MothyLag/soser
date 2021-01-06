import { SAVE_PERSONAL_FORM } from "../../../utils/actions";

const initialState = {
  studentName: "",
  studentGender: "",
  studentPhone: "",
  studentAddress: "",
  studentAge: 0,
};

interface SavePersonalFormAction {
  type: typeof SAVE_PERSONAL_FORM;
  payload: typeof initialState;
}

type PersonalFormActions = SavePersonalFormAction;

export function personalFormReducer(
  state = initialState,
  action: PersonalFormActions
) {
  switch (action.type) {
    case SAVE_PERSONAL_FORM:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
