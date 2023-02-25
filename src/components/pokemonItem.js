import React from "react";
import pokemonItemCSS from "../styles/pokemonItem.module.css";

const PokemonItem = (props) => {
  console.log(props);
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

  return (
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
  );
};

export default PokemonItem;
