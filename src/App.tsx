import { useState } from "react";
import GameGrid from "./components/GameCards/GameGrid";
import GenreList from "./components/Genre/GenreList";
import NavBar from "./components/NavBar/NavBar";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/Platform/PlatformSelector";
import Platform from "./hooks/usePlatform";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div className="dark:bg-slate-700 dark:text-white">
      <div className="dark:bg-slate-700">
        <NavBar />
      </div>
      <div className="grid grid-flow-col dark:bg-slate-700">
        <div className="hidden lg:block px-5 lg:w-[200px]">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </div>
        <div className=" ">
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <GameGrid gameQuery={gameQuery} />
        </div>
      </div>
    </div>
  );
};

export default App;
