import { SAVE_COMPANY_FORM } from "../../../utils/actions";

const initialState = {
  companyName: "",
  companyAddress: "",
  companyPhone: "",
  companyRFC: "",
  companyDepartment: "",
  headDepartment: "",
};

interface SaveCompanyFormAction {
  type: typeof SAVE_COMPANY_FORM;
  payload: typeof initialState;
}

type CompanyFormActions = SaveCompanyFormAction;

export function companyFormReducer(
  state = initialState,
  action: CompanyFormActions
) {
  switch (action.type) {
    case SAVE_COMPANY_FORM:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
