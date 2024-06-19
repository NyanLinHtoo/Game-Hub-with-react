import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
        setErrors("");
      })
      .catch((err) => {
        setErrors(err.message);
        setGames([]);
      });
  }, []);

  return { games, errors };
};

export default useGames;
