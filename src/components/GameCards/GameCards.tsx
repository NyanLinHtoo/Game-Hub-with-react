import { Game } from "../../hooks/useGames";
import getCroppedImageUrl from "../../services/image-url";
import CriticScores from "./CriticScores";
import PlatformIconLists from "../Icon/PlatformIconLists";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  return (
    <div className="">
      <img
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        className="h-56 w-full"
      />

      <div className="flex justify-between pt-4">
        <PlatformIconLists
          platForms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScores score={game.metacritic} />
      </div>
      <p className="text-2xl font-medium dark:text-white px-4 pb-4">
        {game.name}
      </p>
    </div>
  );
};

export default GameCards;
