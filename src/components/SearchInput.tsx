const SearchInput = () => {
  return (
    <div className=" relative w-full">
      <svg
        className="absolute inset-y-4  start-4 flex items-center w-4 h-4 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20">
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
      <input
        type="text"
        id="default-input"
        className="pl-12 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-xl block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  w-full"
        placeholder="Search games..."
      />
    </div>
  );
};

export default SearchInput;
