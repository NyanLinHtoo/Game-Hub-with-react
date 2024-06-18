import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <div className="flex flex-row items-center">
      <img src={logo} alt="logo" className="w-16 ml-2" />
      Nav Bar
    </div>
  );
};

export default NavBar;
