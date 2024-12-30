import { useState } from "react";
// components
import { Header } from "./components/Header/Header";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
// custom hook
import { getPokemonCards } from "./react-query/hooks/GetPokemonCards";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 75;
  const { data, isLoading, error } = getPokemonCards(currentPage);

  if (isLoading) {
    return (
      <div className="text-center m-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (error) return <div>An error has occurred: {error.message}</div>;

  const filteredPokemon = (data ?? []).filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ backgroundImage: `url('/pokemon-bg.jpg')` }}>
      <Header setSearchQuery={setSearchQuery} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <Card cards={filteredPokemon} />
    </div>
  );
}

export default App;
