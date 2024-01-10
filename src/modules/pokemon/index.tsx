import usePokemonData from "../../hooks/usePokemonData";
import PokemonList from "./pokemon-list";

const PokeAppModule = () => {
  const pokemones = usePokemonData();

  return (
    <section className="flex flex-col gap-8 items-center">
      <h1 className="text-4xl text-primary font-extrabold">PokeApp</h1>
      {<PokemonList pokemones={pokemones || []} /> || <p>No hay pokemones</p>}
    </section>
  );
};

export default PokeAppModule;
