import React, { useState } from "react";
import searchCSS from "../styles/searchCSS.module.css";
import { pokemon } from "../Api/api";
import PokemonItem from "./pokemonItem";

const PokemonSearch = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [chosenPokemon, setChosenPokemon] = useState(false);
  const [pokemonCard, setPokemonCard] = useState([]);

  const pokemonSearchTerm = (e) => {
    pokemon(pokemonName).then((res) => {
      res.json().then((data) => {
        setPokemonCard(data);
        setChosenPokemon(true);
        e.preventDefault();
        console.log(data);
      });
    });
    e.target.value = "";
  };

  const onChange = (e) => {
    setPokemonName(e.target.value);
  };

  return (
    <div style={{ backgroundColor: "#FF0000", height: "100vh" }}>
      <div className={searchCSS.inputContainer}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Search Pokemon codex"
        />
        <button onClick={pokemonSearchTerm} className={searchCSS.btn}>
          Search
        </button>
      </div>
      <div className={searchCSS.cardContainer}>
        <div>
          {!chosenPokemon ? (
            <h1 className={searchCSS.choosePokemon}>Please choose a Pokemon</h1>
          ) : (
            <PokemonItem pokemonCard={pokemonCard} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonSearch;
