import { useState } from "react";
import GameGrid from "./components/GameCards/GameGrid";
import GenreList from "./components/Genre/GenreList";
import NavBar from "./components/NavBar/NavBar";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/Selectors/PlatformSelector";
import Platform from "./hooks/usePlatform";
import SortSelector from "./components/Selectors/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div className="h-screen dark:bg-slate-700 dark:text-white">
      <div className="dark:bg-slate-700">
        <NavBar />
      </div>
      <div className="grid grid-cols-6 col-auto dark:bg-slate-700">
        <div className="hidden lg:block px-5 lg:w-[200px]">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </div>
        <div className="lg:col-span-5 col-span-6">
          <div className="flex flex-row pl-2 mb-2">
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </div>
          <GameGrid gameQuery={gameQuery} />
        </div>
      </div>
    </div>
  );
};

export default App;
