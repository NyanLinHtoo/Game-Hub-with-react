import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint)
      .then((res) => {
        setData(res.data.results);
        setErrors("");
        setLoading(false);
      })
      .catch((err) => {
        setErrors(err.message);
        setData([]);
        setLoading(false);
      });
  }, []);

  return { data, errors, isLoading };
};

export default useData;
