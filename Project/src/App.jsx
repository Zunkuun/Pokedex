import SearchBar from "./components/SearchBar";
import ErrorMessage from "./components/ErrorMessage";
import PokemonList from "./components/PokemonList";

export default function App() {
  return (
    <div className="app-container">
      <h1 className="main-title">🔥 Pokédex</h1>
      <SearchBar />
      <ErrorMessage />
      <PokemonList />
    </div>
  );
}