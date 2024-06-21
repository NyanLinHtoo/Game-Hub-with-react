import logo from "../../assets/logo.webp";
import SearchInput from "../SearchInput";

import ModeSwitch from "./ModeSwitch";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    // <div className="flex flex-row justify-between">
    <div className="grid grid-cols-12 items-center gap-2 px-2">
      {/* Logo - Align to the left */}
      <div className="flex justify-start">
        <img src={logo} alt="logo" className="w-16" />
      </div>

      {/* SearchInput - Center and occupy full width */}
      <div className="flex justify-center col-span-10">
        <SearchInput onSearch={onSearch} />
      </div>

      {/* ModeSwitch - Align to the right */}
      <div className="flex justify-end">
        <ModeSwitch />
      </div>
    </div>
  );
};

export default NavBar;
