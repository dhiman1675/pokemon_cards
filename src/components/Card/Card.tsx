import { useState } from "react";
import { PokemonCard } from "../../react-query/Api";
import "./Card.css";

interface Props {
  cards: PokemonCard[];
}

const Card = ({ cards }: Props) => {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const handleFlip = (id: string) => {
    setFlippedCards((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div
      className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 row-cols-xl-7 d-flex
                    justify-content-center mx-1"
    >
      {cards.map((pokemon) => (
        <div
          key={pokemon.id}
          className="card animated-rainbow-div m-3 p-1"
          onClick={() => handleFlip(pokemon.id)}
        >
          {!flippedCards[pokemon.id] ? (
            <div>
              <img
                src={pokemon.images.large}
                alt={pokemon.name}
                className="card-img-top"
              />
            </div>
          ) : (
            <div className="card-body">
              <p className="card-text">{pokemon.types?.join(", ")} Type</p>
              <p className="card-text">
                {pokemon.flavorText || (
                  <img
                    src="./pokedance-pokemon.gif"
                    alt={"No favorite text for " + pokemon.name}
                    style={{ width: 150 }}
                  />
                )}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Card;
