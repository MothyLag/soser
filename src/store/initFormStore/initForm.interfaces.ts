interface PersonalFormState {
  studentName: string;
  studentGender: string;
  studentPhone: string;
  studentAddress: string;
  studentAge: number;
}

interface EscolarFormState {
  ctrlNumber: string;
  career: string;
  creditsNumber: number;
  creditsPercent: number;
}

interface CompanyFormState {
  companyName: string;
  companyAddress: string;
  companyPhone: string;
  companyRFC: string;
  companyDepartment: string;
  headDepartment: string;
}

export interface InitFormState {
  PersonalForm: PersonalFormState;
  EscolarForm: EscolarFormState;
  CompanyForm: CompanyFormState;
}
