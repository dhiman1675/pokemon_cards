import axios from "axios";

export interface PokemonCard {
  id: string;
  name: string;
  images: { small: string };
  // flavorText: string;
  types: string[];
}

export const fetchPokemonCards = async (
  page: number
): Promise<PokemonCard[]> => {
  const response = await axios.get(
    `https://api.pokemontcg.io/v2/cards?page=${page}`
  );
  return response.data.data;
};
