import logo from "../../assets/logo.webp";

import ModeSwitch from "./ModeSwitch";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between ">
      <div className="flex flex-row items-center">
        <img src={logo} alt="logo" className="w-16 ml-2" />
      </div>
      <div className="flex flex-row items-center">
        <ModeSwitch />
      </div>
    </div>
  );
};

export default NavBar;
