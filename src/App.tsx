import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="">
      <div className="bg-green-300">
        <NavBar />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className=" bg-slate-500 hidden lg:block">Aside</div>
        <div className=" bg-gray-300">main</div>
      </div>
    </div>
  );
};

export default App;
