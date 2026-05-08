import { usePokemon } from "../contexts/PokemonContext";
import PokemonCard from "./PokemonCard";

export default function PokemonList() {
  const { pokemon, loading } = usePokemon();

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      {pokemon.map((p) => (
        <PokemonCard key={p.id} pokemon={p} />
      ))}
    </div>
  );
}