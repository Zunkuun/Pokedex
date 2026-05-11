import { usePokemon } from "../contexts/PokemonContext";
import PokemonCard from "./PokemonCard";

export default function PokemonList() {
  const { pokemon, loading } = usePokemon();

  if (loading) return <p className="text-center">Carregando...</p>;

  return (
    <div className="pokemon-list-container">
      {pokemon.map((p) => (
        <PokemonCard key={p.id} pokemon={p} />
      ))}
    </div>
  );
}