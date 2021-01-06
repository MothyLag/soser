import { combineReducers } from "redux";
import { companyFormReducer } from "./formStepsStore/companyForm.reducer";
import { escolarFormReducer } from "./formStepsStore/escolarForm.reducer";
import { personalFormReducer } from "./formStepsStore/personalForm.reducer";
export const initFormReducer = combineReducers({
  PersonalForm: personalFormReducer,
  EscolarForm: escolarFormReducer,
  CompanyForm: companyFormReducer,
});
