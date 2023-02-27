import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import pokemonItemCSS from "../styles/pokemonItem.module.css";

const PokemonItem = (props) => {
  const { sprites, name } = props.pokemonCard;
  const keys = !(sprites == null) ? Object.keys(sprites) : [];
  const imageUrl = keys.includes("other")
    ? sprites.other.dream_world.front_default
    : "/image-not-found.png";

  const hp = props.pokemonCard.stats[0].base_stat;
  const type = props.pokemonCard.types[0].type.name;
  const abilityOne = props.pokemonCard.abilities[0].ability.name;
  const abilityTwo = props.pokemonCard.abilities[1].ability.name;
  const attack = props.pokemonCard.stats[1].base_stat;
  const defense = props.pokemonCard.stats[2].base_stat;

  const id = props.pokemonCard.id;

  const pokemonBerries = `pokemonberries/${id}`;

  return (
    <div className={pokemonItemCSS.container}>
      <div className={pokemonItemCSS.card}>
        <div className={pokemonItemCSS.title}>
          <p className={pokemonItemCSS.name}>{name}</p>
          <p>HP {hp}</p>
        </div>
        <img className={pokemonItemCSS.img} src={imageUrl} alt="dinosaur" />
        <div className={pokemonItemCSS.info}>
          <p>Type : {type}</p>
          <p>
            Abilites : {abilityOne}, {abilityTwo}
          </p>
          <p>Attack : {attack}</p>
          <p>Defense : {defense}</p>
        </div>
      </div>
      <div className={pokemonItemCSS.infoContainer}>
        <h2>To learn more about your pokemon, click on a topic below.</h2>
        <div className={pokemonItemCSS.btnContainer}>
          <Button
            className={pokemonItemCSS.btn}
            style={{ backgroundColor: "#CC0000", margin: "5px" }}
            component={Link}
            to={pokemonBerries}
            variant="contained"
          >
            Berries
          </Button>
          <Button
            className={pokemonItemCSS.btn}
            style={{ backgroundColor: "#3B4CCA", margin: "5px" }}
            component={Link}
            to={pokemonBerries}
            variant="contained"
          >
            Berries
          </Button>
          <Button
            className={pokemonItemCSS.btn}
            style={{ backgroundColor: "#B3A125", margin: "5px" }}
            component={Link}
            to={pokemonBerries}
            variant="contained"
          >
            Berries
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PokemonItem;
