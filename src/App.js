import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import PokemonSearch from "./components/pokemonSearch";
import PokemonBerries from "./components/pokemonBerries";
import PokemonObjects from "./components/pokemonObjects";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<PokemonSearch />} />
          <Route path="pokemonberries/:id" element={<PokemonBerries />} />
          <Route path="pokemonobjects/:id" element={<PokemonObjects />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
