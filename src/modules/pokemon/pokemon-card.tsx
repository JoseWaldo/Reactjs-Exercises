interface PokemonCardProps {
  name: string;
  image: string;
}

const PokemonCard = (props: PokemonCardProps) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl w-full">
      <figure>
        <img className="h-32" src={props.image} alt={props.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
      </div>
    </div>
  );
};

export default PokemonCard;
