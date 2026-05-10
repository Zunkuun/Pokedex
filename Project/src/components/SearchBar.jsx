import { useState } from "react";
import { usePokemon } from "../contexts/PokemonContext";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const { searchPokemon } = usePokemon();

  function handleSubmit(e) {
    e.preventDefault();
    searchPokemon(input);
  }

  return (
    <Form
      className="d-flex justify-content-center gap-2 mb-4"
      onSubmit={handleSubmit}
    >
      <Form.Control
        type="text"
        placeholder="Digite um Pokémon"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ maxWidth: "300px" }}
      />

      <Button variant="warning" type="submit">
        Buscar
      </Button>
    </Form>
  );
}