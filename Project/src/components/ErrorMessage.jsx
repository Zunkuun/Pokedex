import { usePokemon } from "../contexts/PokemonContext";

export default function ErrorMessage() {
  const { error } = usePokemon();

  if (!error) return null;

  return <p style={{ color: "red" }}>{error}</p>;
}