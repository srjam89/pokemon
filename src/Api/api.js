const pokemon = (action) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${action}`);
};

export default pokemon;
