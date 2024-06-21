import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { Platform } from "../../hooks/useGames";
import { SiNintendoswitch } from "react-icons/si";
import { IconType } from "react-icons";

interface Props {
  platForms: Platform[];
}

const PlatformIconLists = ({ platForms }: Props) => {
  // Mapping platform slugs to their respective icons
  const platformIcons: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    nintendo: SiNintendoswitch,
  };

  return (
    <div className="pl-2">
      {platForms.map((platform) => {
        const IconComponent = platformIcons[platform.slug];
        // Render the icon if it exists in the mapping
        return IconComponent ? (
          <span
            key={platform.id}
            className="inline-block pl-2 pb-2  text-white text-sm">
            <IconComponent />
          </span>
        ) : null;
      })}
    </div>
  );
};

export default PlatformIconLists;
