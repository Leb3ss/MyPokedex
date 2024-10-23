const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];
console.log(pokemonList);

const pokemon = pokemonList[0];
console.log(pokemon);

function PokemonCard() {
  return (
    <figure>
      {pokemon.imgSrc !== undefined ? (
        <img src={pokemon.imgSrc} alt="Pokemon Cards" />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
