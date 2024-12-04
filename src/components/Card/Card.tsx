interface Card {
  id: string;
  name: string;
  images: { small: string };
}
interface Props {
  cards: Card[];
}
const Card = ({ cards }: Props) => {
  return (
    <div className="row">
      {cards.map((pokemon) => (
        <div
          key={pokemon.id}
          className="card text-bg-dark m-1"
          style={{ width: "19.2%" }}
        >
          <div className="card-header">{pokemon.name}</div>
          <img
            src={pokemon.images.small}
            alt={pokemon.name}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{pokemon.types.join(", ")} Type</h5>
            <p className="card-text">{pokemon.flavorText}</p>
          </div>
          <div className="card-body">
            <a href="#" className="card-link">
              Card link
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
