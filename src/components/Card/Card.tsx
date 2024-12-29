import { PokemonCard } from "../../react-query/Api";

interface Props {
  cards: PokemonCard[];
}
const Card = ({ cards }: Props) => {
  return (
    <div className="row">
      {cards.map((pokemon) => (
        <div
          key={pokemon.id}
          className="card text-bg-dark m-3"
          style={{ width: "14.3%" }}
        >
          <div className="card-header">{pokemon.name}</div>
          <img
            src={pokemon.images.small}
            alt={pokemon.name}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-text">{pokemon.types.join(", ")} Type</h5>
            {/* <p className="card-text">{pokemon.flavorText}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
