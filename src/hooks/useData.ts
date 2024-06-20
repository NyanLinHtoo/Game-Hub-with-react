import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      setLoading(true);
      console.log("Fetching data with config:", requestConfig); // Log request config
      apiClient
        .get<FetchResponse<T>>(endpoint, { ...requestConfig })
        .then((res) => {
          console.log(res.data.results); // Log response data
          setData(res.data.results);
          setErrors("");
          setLoading(false);
        })
        .catch((err) => {
          console.log(err); // Log error
          setErrors(err.message);
          setData([]);
          setLoading(false);
        });
    },
    deps ? [...deps] : []
  );

  return { data, errors, isLoading };
};

export default useData;
