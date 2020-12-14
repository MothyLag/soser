import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { ChangeEvent, FocusEvent } from "react";

export interface ISoserIconInputProps {
  icon?: IconDefinition;
  label: string;
  type?: "text" | "number" | "password";
  value: any;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (value: FocusEvent<HTMLDivElement>) => void;
  name: string;
  error?: string | undefined;
  touched?: boolean;
}
