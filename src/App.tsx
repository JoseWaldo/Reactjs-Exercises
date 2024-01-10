import { Route, Routes } from "react-router-dom";
import Index from "./pages";
import PokeApp from "./pages/pokeapp";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="pokeapp" element={<PokeApp />}></Route>
      </Routes>
    </>
  );
};

export default App;
