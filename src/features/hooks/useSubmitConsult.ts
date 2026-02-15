import { useState } from "react";
import { ConsultationServiceClient } from "../../api/service";

export const useSubmitConsult = () => {
  //typically loading / success / error states would be handled by a library such as ReactQuery
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const submit = async (formData: Record<string, string>) => {
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    try {
      await ConsultationServiceClient({
        data: formData,
      });
      setIsSuccess(true);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { submit, isLoading, isSuccess, isError };
};
