import PokemonCard from "./pokemon-card";
import { type Pokemon } from "../../services/pokemon.service";

const PokemonList = ({ pokemones }: { pokemones: Pokemon[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 place-items-center gap-4">
      {pokemones?.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          image={pokemon.image}
        />
      ))}
    </div>
  );
};

export default PokemonList;
