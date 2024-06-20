import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScores from "./CriticScores";
import PlatformIconLists from "./PlatformIconLists";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  return (
    <div className="">
      <img src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <p className="text-2xl font-medium dark:text-white p-4">{game.name}</p>
      <div className="flex justify-between">
        <PlatformIconLists
          platForms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScores score={game.metacritic} />
      </div>
    </div>
  );
};

export default GameCards;
