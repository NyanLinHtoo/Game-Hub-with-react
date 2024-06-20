import useGames from "../hooks/useGames";
import GameCardContainer from "./GameCardContainer";
import GameCards from "./GameCards";
import GameCardsSkeletons from "./GameCardsSkeletons";

const GameGrid = () => {
  const { games, errors, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {errors && <span>{errors}</span>}
      <ul className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 mx-3">
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardsSkeletons key={skeleton} />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer>
            <GameCards key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
