export default function PokemonCard({ pokemon }) {
  return (
    <div className="card">
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt="pokemon.name"/>
      <p>Altura: {pokemon.height/10} m</p>
      <p>Peso: {pokemon.weight/10} kg</p>
    </div>
  );
}