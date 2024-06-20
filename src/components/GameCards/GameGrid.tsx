import useGames from "../../hooks/useGames";
import { Genre } from "../../hooks/useGenre";
import GameCardContainer from "./GameCardContainer";
import GameCards from "./GameCards";
import GameCardsSkeletons from "./GameCardsSkeletons";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, errors, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {errors && <span>{errors}</span>}
      <ul className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mx-3">
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardsSkeletons />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCards game={game} />
          </GameCardContainer>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
