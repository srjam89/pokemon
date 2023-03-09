import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { pokemonIdCall, pokemon } from "../Api/api";
import berriesCSS from "../styles/berriesCSS.module.css";

const PokemonInfo = (props) => {
  const [pokemonBerries, setPokemonBerries] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const getPokemonId = (id) => {
    pokemonIdCall(`${id}`).then((res) => {
      res.json().then((data) => {
        setPokemonBerries(data);
        setIsLoading(false);
        setIsLoaded(true);
      });
    });
  };

  const getPokemonDetails = (id) => {
    pokemon(`${id}`).then((res) => {
      res.json().then((data) => {
        setPokemonDetails(data);
      });
    });
  };

  const { id } = useParams();

  useEffect(() => {
    getPokemonId(id);
    getPokemonDetails(id);
  }, [id]);

  if (isLoading && !isLoaded) {
    return <div>Loading...</div>;
  }

  const { flavors, growth_time, max_harvest, natural_gift_power, name } =
    pokemonBerries;

  const flavor1 = flavors[0].flavor.name;
  const flavor2 = flavors[1].flavor.name;

  const { sprites } = pokemonDetails;
  const keys = !(sprites == null) ? Object.keys(sprites) : [];
  const imageUrl = keys.includes("other")
    ? sprites.other.dream_world.front_default
    : "/image-not-found.png";

  const flavorKeys = !(flavors == null) ? Object.keys(flavors) : [];

  return (
    <div className={berriesCSS.container}>
      <div className={berriesCSS.title}>
        <h1>
          Get to know{" "}
          <span className={berriesCSS.capitalise}>{pokemonDetails.name}</span>{" "}
          and their berries
        </h1>
      </div>

      <div className={berriesCSS.tileContainer}>
        <div>
          <div className={berriesCSS.flex}>
            <h2 className={berriesCSS.category}>Name :</h2>{" "}
            <h2 className={berriesCSS.result}>&nbsp; {name}</h2>
          </div>
          <div className={berriesCSS.flex}>
            <h2 className={berriesCSS.category}>Flavors :</h2>{" "}
            {/* <h2 className={berriesCSS.result}>
              &nbsp;
              {flavor1}, {flavor2}
            </h2> */}
            {flavorKeys.map((flavor) => (
              <h2 className={berriesCSS.result}>&nbsp; {flavor.name}</h2>
            ))}
          </div>
          <div className={berriesCSS.flex}>
            <h2 className={berriesCSS.category}>Firmness :</h2>{" "}
            <h2 className={berriesCSS.result}>
              &nbsp; {pokemonBerries.firmness.name}
            </h2>
          </div>
          <div className={berriesCSS.flex}>
            <h2 className={berriesCSS.category}>Growth Time :</h2>{" "}
            <h2 className={berriesCSS.result}>&nbsp; {growth_time}</h2>
          </div>
          <div className={berriesCSS.flex}>
            <h2 className={berriesCSS.category}>Max Harvest :</h2>{" "}
            <h2 className={berriesCSS.result}>&nbsp; {max_harvest}</h2>
          </div>
          <div className={berriesCSS.flex}>
            <h2 className={berriesCSS.category}>Gift Type :</h2>{" "}
            <h2 className={berriesCSS.result}>
              &nbsp; {pokemonBerries.natural_gift_type.name}
            </h2>
          </div>
          <div className={berriesCSS.flex}>
            <h2 className={berriesCSS.category}>Gift Power :</h2>{" "}
            <h2 className={berriesCSS.result}>&nbsp; {natural_gift_power}</h2>
          </div>
        </div>
        <img
          className={berriesCSS.pokemon}
          src={imageUrl}
          alt="pokemon animal"
        />
      </div>
      {/* <img
        className={berriesCSS.berries}
        src="/berries.avif"
        alt="pokemon berries"
      /> */}
    </div>
  );
};

export default PokemonInfo;
