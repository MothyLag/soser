import { SAVE_ESCOLAR_FORM } from "../../../utils/actions";

const initialState = {
  ctrlNumber: "",
  career: "",
  creditsNumber: 0,
  creditsPercent: 0,
};

interface SaveEscolarFormAction {
  type: typeof SAVE_ESCOLAR_FORM;
  payload: typeof initialState;
}

type EscolarFormActions = SaveEscolarFormAction;

export function escolarFormReducer(
  state = initialState,
  action: EscolarFormActions
) {
  switch (action.type) {
    case SAVE_ESCOLAR_FORM:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
