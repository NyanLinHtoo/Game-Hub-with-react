import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      className="relative w-full"
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}>
      <div>
        <svg
          className="absolute inset-y-4  start-4 flex items-center w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          fill="none"
          viewBox="0 0 20 20">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <input
          ref={ref}
          type="text"
          id="default-input"
          className="pl-12 bg-gray-50 border border-gray-300  text-gray-900 text-md rounded-2xl block p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white w-full dark:focus:bg-neutral-200 dark:focus:text-black dark:hover:bg-neutral-200 dark:hover:text-black"
          placeholder="Search games..."
        />
      </div>
    </form>
  );
};

export default SearchInput;
