export const pokemon = (action) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${action}`);
};

export const pokemonIdCall = (id) => {
  return fetch(`https://pokeapi.co/api/v2/berry/${id}`);
};

export const pokemonItemsCall = (id) => {
  return fetch(`https://pokeapi.co/api/v2/item/${id}`);
};
