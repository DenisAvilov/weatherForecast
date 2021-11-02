import { useState, useCallback } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useFetch() {
  const [response, setResponse] = useState<null | any>(null);
  const [errors, setError] = useState<Error | null>();
  const [isLoading, setIsLoading] = useState(true);

  const req = useCallback(async (request: RequestInfo, init?: RequestInit) => {
    const abortController = new AbortController();
    setIsLoading(true);
    try {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const response = await fetch(request, {
        ...init,
        signal: abortController.signal,
      });
      setResponse(await response?.json());
      setIsLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-shadow
    } catch (errors: any) {
      if (errors.name === 'AbortError') {
        return
      }
      setError(errors);
      setIsLoading(false);
    }
    // eslint-disable-next-line consistent-return
    return () => {
      abortController.abort();
    };
  }, [])

  return {
    response, errors, isLoading, req
  };
}
