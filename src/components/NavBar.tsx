import { MdDarkMode, MdLightMode } from "react-icons/md";
import logo from "../assets/logo.webp";
import useModes from "../hooks/useMode";

const NavBar = () => {
  const { isDarkMode, setIsDarkMode } = useModes();

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex flex-row justify-between ">
      <div className="flex flex-row items-center">
        <img src={logo} alt="logo" className="w-16 ml-2" />
        <span>Nav Bar</span>
      </div>
      <div className="flex flex-row items-center">
        <button onClick={handleToggle} className="mr-6">
          {!isDarkMode && <MdLightMode />}
          {isDarkMode && <MdDarkMode />}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
