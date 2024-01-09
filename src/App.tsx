import usePokemonData from "./hooks/usePokemonData";
import PokemonList from "./modules/pokemon/pokemon-list";

const App = () => {
  const pokemones = usePokemonData();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 py-4">
      <h1 className="text-4xl text-primary font-bold">PokeAPI</h1>
      {<PokemonList pokemones={pokemones || []} /> || <p>No hay pokemones</p>}
    </main>
  );
};

export default App;
