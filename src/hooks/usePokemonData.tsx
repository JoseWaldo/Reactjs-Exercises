import { useEffect, useState } from "react";
import { getPokemons, type Pokemon } from "../services/pokemon.service";
import useErrorStore from "../store/useErrorStore";

const ENDPOINT_POKEAPI = "https://pokeapi.co/api/v2/pokemon";

const usePokemonData = (): Pokemon[] => {
  const [pokemons, setPokemons] = useState<Pokemon[]>();
  const { setError, setLoading } = useErrorStore((state) => state.actions);

  useEffect(() => {
    setLoading(true);
    getPokemons(ENDPOINT_POKEAPI)
      .then((pokemons) => {
        setPokemons(pokemons);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return pokemons || [];
};

export default usePokemonData;
