import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenre = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<FetchGenreResponse>("/games")
      .then((res) => {
        setGenres(res.data.results);
        setErrors("");
        setLoading(false);
      })
      .catch((err) => {
        setErrors(err.message);
        setGenres([]);
        setLoading(false);
      });
  }, []);

  return { genres, errors, isLoading };
};

export default useGenre;
