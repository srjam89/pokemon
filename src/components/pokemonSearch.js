import React, { useState } from "react";
import searchCSS from "../styles/searchCSS.module.css";
import { pokemon } from "../Api/api";
import PokemonItem from "./pokemonItem";

const PokemonSearch = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [chosenPokemon, setChosenPokemon] = useState(false);
  const [pokemonCard, setPokemonCard] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const pokemonSearchTerm = (e) => {
    setErrorMessage("");
    pokemon(pokemonName).then((res) => {
      res
        .json()
        .then((data) => {
          e.preventDefault();
          setPokemonCard(data);
          setChosenPokemon(true);
          setPokemonName("");
        })
        .catch(() => {
          setErrorMessage("404 error, please try again");
        });
    });
  };

  const renderErrorMessage = (error) => {
    return (
      <div>
        <h1>{`Something went wrong: ${errorMessage}`}</h1>
      </div>
    );
  };

  const onChange = (e) => {
    setPokemonName(e.target.value.toLowerCase());
  };

  return (
    <div style={{ backgroundColor: "#FF0000", height: "100vh" }}>
      {errorMessage && renderErrorMessage()}
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
