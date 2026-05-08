import SearchBar from "./components/SearchBar";
import ErrorMessage from "./components/ErrorMessage";
import PokemonList from "./components/PokemonList";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🔥 Pokédex</h1>
      <SearchBar />
      <ErrorMessage />
      <PokemonList />
    </div>
  );
}