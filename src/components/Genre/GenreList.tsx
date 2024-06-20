import useGenre from "../../hooks/useGenre";
import getCroppedImageUrl from "../../services/image-url";
import Spinner from "../Spinner";

const GenreList = () => {
  const { data, isLoading } = useGenre();

  if (isLoading) return <Spinner />;
  return (
    <ul>
      {data.map((genre) => (
        <li className="flex flex-row py-1 items-center" key={genre.id}>
          <img
            src={getCroppedImageUrl(genre.image_background)}
            alt={genre.name}
            className="size-8 rounded-lg"
          />
          <p className="dark:text-white pl-3">{genre.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
