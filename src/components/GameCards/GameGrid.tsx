import { GameQuery } from "../../App";
import useGames from "../../hooks/useGames";
import GameCardContainer from "./GameCardContainer";
import GameCards from "./GameCards";
import GameCardsSkeletons from "./GameCardsSkeletons";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, errors, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (errors) return <span>{errors}</span>;

  return (
    <ul className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mx-3">
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardsSkeletons />
          </GameCardContainer>
        ))}
      {!isLoading &&
        data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCards game={game} />
          </GameCardContainer>
        ))}
    </ul>
  );
};

export default GameGrid;
