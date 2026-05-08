import { useState } from "react";
import { usePokemon } from "../contexts/PokemonContext";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const { searchPokemon } = usePokemon();

  function handleSubmit(e) {
    e.preventDefault();
    searchPokemon(input);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Digite o nome do Pokémon"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit">Buscar</button>
    </form>
  );
}