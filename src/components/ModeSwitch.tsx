import useModes from "../hooks/useMode";
import { IoMoon, IoSunny } from "react-icons/io5";

const ModeSwitch = () => {
  const { isDarkMode, setIsDarkMode } = useModes();

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={handleToggle} className="mr-6">
      {!isDarkMode && <IoSunny />}
      {isDarkMode && <IoMoon />}
    </button>
  );
};

export default ModeSwitch;
