import useGames from "../hooks/useGames";
import GameCards from "./GameCards";

const GameGrid = () => {
  const { games, errors } = useGames();

  return (
    <>
      {errors && <span>{errors}</span>}
      <ul className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 mx-3">
        {games.map((game) => (
          <GameCards key={game.id} game={game} />
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
