import { Game } from "../hooks/useGames";
import PlatformIconLists from "./PlatformIconLists";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  return (
    <div className="bg-slate-400 rounded-xl overflow-auto">
      <img src={game.background_image} alt={game.name} />
      <p className="text-2xl font-medium dark:text-white p-4">{game.name}</p>
      <PlatformIconLists
        platForms={game.parent_platforms.map((p) => p.platform)}
      />
    </div>
  );
};

export default GameCards;
