import useGenre, { Genre } from "../../hooks/useGenre";
import getCroppedImageUrl from "../../services/image-url";
import Spinner from "../Spinner";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading } = useGenre();

  if (isLoading) return <Spinner />;
  return (
    <>
      <h1 className="text-xl my-3">Genres</h1>
      <ul>
        {data.map((genre) => (
          <li className="flex flex-row py-1 items-center" key={genre.id}>
            <img
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
              className="size-8 rounded-lg object-cover"
            />
            <button
              className={`dark:text-white pl-3 hover:underline text-left ${
                selectedGenre?.id === genre.id ? "font-medium" : ""
              }`}
              onClick={() => onSelectGenre(genre)}>
              {genre.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
