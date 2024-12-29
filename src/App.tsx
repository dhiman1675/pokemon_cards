import { useQuery } from "react-query";
import { useState } from "react";
import { fetchPokemonCards, PokemonCard } from "./react-query/Api";
// components
import { Header } from "./components/Header/Header";
import Card from "./components/Card/Card";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, error } = useQuery<PokemonCard[], Error>({
    queryKey: ["pokemonCards", 1],
    queryFn: () => fetchPokemonCards(1),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: {error.message}</div>;

  const filteredPokemon = (data ?? []).filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ backgroundImage: `url('/pokemon-bg.jpg')` }}>
      <Header setSearchQuery={setSearchQuery} />
      <Card cards={filteredPokemon} />
    </div>
  );
}

export default App;
