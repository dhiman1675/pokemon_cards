import { useQuery } from "react-query";
import { fetchPokemonCards, PokemonCard } from "../Api";

export function getPokemonCards(page: number) {
  return useQuery<PokemonCard[], Error>({
    queryKey: ["pokemonCards", page],
    queryFn: () => fetchPokemonCards(page),
  });
}
