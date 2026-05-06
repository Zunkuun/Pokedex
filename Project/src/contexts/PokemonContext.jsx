import { createContext, useReducer, useContext } from "react";

const PokemonContext = createContext();

const initialState = {
  pokemon: [],
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true, error: null };

    case "SUCCESS":
      return { ...state, loading: false, pokemon: action.payload };

    case "ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

export function PokemonProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function searchPokemon(name) {
    if (!name) {
      dispatch({ type: "ERROR", payload: "Digite um nome!" });
      return;
    }

    try {
      dispatch({ type: "LOADING" });

      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
      );

      if (!res.ok) throw new Error("Pokémon não encontrado");

      const data = await res.json();

      dispatch({ type: "SUCCESS", payload: [data] });
    } catch (err) {
      dispatch({ type: "ERROR", payload: err.message });
    }
  }

  return (
    <PokemonContext.Provider value={{ ...state, searchPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  return useContext(PokemonContext);
}