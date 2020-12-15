import { QueryLazyOptions } from "@apollo/client";
import { ILoginDTO } from "./login.interfaces";

export const onLoginSubmit = (
  query: (options?: QueryLazyOptions<Record<string, any>>) => void
) => (credentials: ILoginDTO) =>
  query({
    variables: {
      credentials: {
        ...credentials,
        ctrlNumber: credentials.ctrlNumber.toString(),
      },
    },
  });
