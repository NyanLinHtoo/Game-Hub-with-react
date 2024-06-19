import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  return (
    <div className="bg-slate-400 rounded-xl overflow-auto">
      <img src={game.background_image} alt={game.name} />
      <p className="text-lg text-white p-4">{game.name}</p>
    </div>
  );
};

export default GameCards;
