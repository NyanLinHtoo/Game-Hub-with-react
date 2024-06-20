import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
        setErrors("");
        setLoading(false);
      })
      .catch((err) => {
        setErrors(err.message);
        setGames([]);
        setLoading(false);
      });
  }, []);

  return { games, errors, isLoading };
};

export default useGames;
