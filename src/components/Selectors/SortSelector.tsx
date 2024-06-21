import { useEffect, useRef, useState } from "react";

const SortSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //   if (errors) return null;

  return (
    <div ref={dropdownRef}>
      <button
        id="dropdownDefaultButton"
        onClick={() => setIsOpen(!isOpen)}
        className="text-white bg-slate-700 hover:bg-slate-800 font-medium rounded-lg text-lg px-8 py-2.5 text-center inline-flex items-center m-3"
        type="button">
        Order by: Relevance
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdown"
        className={`z-10 ${
          isOpen ? "block" : "hidden"
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-56 dark:bg-gray-700 absolute mt-2 ml-4`}>
        <ul
          className="py-2 text-md bg-slate-300 rounded-lg text-black-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton">
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          {/* {data.map((platform) => (
            <li
              onClick={() => {
                setIsOpen(false); // Close dropdown after selection
              }}
              className="block px-4 py-2 rounded-lg hover:bg-gray-500 dark:hover:bg-gray-600 dark:hover:text-white"
              key={platform.id}>
              {platform.name}
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
};

export default SortSelector;
