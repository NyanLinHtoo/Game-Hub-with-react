import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="dark:bg-slate-700 dark:text-white">
      <div className="dark:bg-slate-700">
        <NavBar />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 dark:bg-slate-700">
        <div className="hidden lg:block ">Aside</div>
        <div className=" ">
          <GameGrid />
        </div>
      </div>
    </div>
  );
};

export default App;
