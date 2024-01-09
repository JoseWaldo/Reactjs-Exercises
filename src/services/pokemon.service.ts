export interface Pokemon {
  id: number;
  name: string;
  image: string;
}

export const getPokemons = async (url: string): Promise<Pokemon[]> => {
  const AVATAR_ENDPOINT =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error al obtener los pokemones");
    const data = await response.json();
    const { results } = data;
    const newResults: Pokemon[] = results.map((pokemon: any) => {
      let index = pokemon.url.split("/")[6];
      pokemon.id = index;
      pokemon.image = `${AVATAR_ENDPOINT}${index}.svg`;
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.image,
      };
    });
    return newResults;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
