import { useState, useCallback } from "react";

const useHttp = () => {
  const [httpError, setHttpError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(async (configHttp, processData) => {
    try {
      setIsLoading(true);
      setHttpError(null);
      const { url, method, body, headers } = configHttp;
      const response = await fetch(url, {
        method: method || "GET",
        body: body ? JSON.stringify(body) : null,
        headers: headers || {},
      });

      if (!response.ok) {
        throw new Error("Something wrong with http request");
      }

      const fetchedData = await response.json();
      processData(fetchedData);
    } catch (error) {
      setHttpError(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    sendRequest,
    httpError,
    isLoading,
  };
};

export default useHttp;
