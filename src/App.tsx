import { useState } from "react";
import GameGrid from "./components/GameCards/GameGrid";
import GenreList from "./components/Genre/GenreList";
import NavBar from "./components/NavBar/NavBar";
import { Genre } from "./hooks/useGenre";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <div className="dark:bg-slate-700 dark:text-white">
      <div className="dark:bg-slate-700">
        <NavBar />
      </div>
      <div className="grid grid-flow-col dark:bg-slate-700">
        <div className="hidden lg:block px-5 lg:w-[200px]">
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </div>
        <div className=" ">
          <GameGrid selectedGenre={selectedGenre} />
        </div>
      </div>
    </div>
  );
};

export default App;
