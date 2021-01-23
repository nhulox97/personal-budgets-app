import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [result, setResult] = useState({
    status_code: 0,
    result: undefined,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResource = async () => {
      try {
        let res = await fetch(url);
        let result = await res.json();
        setResult(result);
        setLoading(!loading);
      } catch (error) {
        setLoading(!loading);
        setError(error);
      }
    };
    fetchResource();
  }, [url]);

  return { result, loading, error };
};

export default useFetch;

