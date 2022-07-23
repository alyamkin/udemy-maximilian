import { useReducer, useCallback } from "react";

const httpReducer = (currentHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return {
        isLoading: true,
        error: null,
        reqExtra: action.reqExtra,
        requestType: action.requestType,
        data: null,
      };
    case "RESPONSE_SUCCESS":
      return { ...currentHttpState, data: action.data, isLoading: false };
    case "ERROR":
      return {
        ...currentHttpState,
        error: action.errorMessage,
        isLoading: false,
      };
    case "CLEAR":
      return { ...currentHttpState, error: null };
    default:
      throw new Error("Shouldn't be there");
  }
};

const useHttp = () => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    isLoading: false,
    error: null,
    reqExtra: null,
    requestType: null,
    data: null,
  });

  const sendRequest = useCallback(
    async (httpConfig, requestType, reqExtra = null) => {
      try {
        const { url, method, body } = httpConfig;
        dispatch({ type: "SEND", reqExtra, requestType });

        const response = await fetch(url, {
          method: method || "GET",
          body: body ? JSON.stringify(body) : null,
          headers: { "Content-Type": "application-json" },
        });

        if (!response.ok) {
          throw new Error("Something went wrong during http request...");
        }

        const data = await response.json();

        dispatch({ type: "RESPONSE_SUCCESS", data });
      } catch (err) {
        dispatch({ type: "ERROR", errorMessage: err.message });
      }
    },
    [dispatch]
  );

  const clearError = useCallback(() => {
    dispatch({ type: "CLEAR" });
  }, [dispatch]);

  return {
    sendRequest,
    clearError,
    data: httpState.data,
    error: httpState.error,
    isLoading: httpState.isLoading,
    reqExtra: httpState.reqExtra,
    requestType: httpState.requestType,
  };
};

export default useHttp;
