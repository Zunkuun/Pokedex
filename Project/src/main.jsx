import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PokemonProvider } from "./contexts/PokemonContext";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PokemonProvider>
    <App />
  </PokemonProvider>
);