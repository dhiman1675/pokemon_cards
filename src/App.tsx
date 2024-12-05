import Card from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import pokemonData from "../public/pokemonCards.json";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredPokemon = pokemonData.data.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div style={{ backgroundImage: `url('public/pokemon-bg.jpg')` }}>
      <Header setSearchQuery={setSearchQuery} />
      <Card cards={filteredPokemon} />
    </div>
  );
}

export default App;
