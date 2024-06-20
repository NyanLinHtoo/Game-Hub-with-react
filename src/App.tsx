import GameGrid from "./components/GameCards/GameGrid";
import GenreList from "./components/Genre/GenreList";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div className="dark:bg-slate-700 dark:text-white">
      <div className="dark:bg-slate-700">
        <NavBar />
      </div>
      <div className="grid grid-flow-col dark:bg-slate-700">
        <div className="hidden lg:block px-5 lg:w-[200px]">
          <GenreList />
        </div>
        <div className=" ">
          <GameGrid />
        </div>
      </div>
    </div>
  );
};

export default App;
