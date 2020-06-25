var pokemonList = [
	{
		pokemonName: 'Pikachu',
		pokemonHeight: 0.4,
		type: 'Electric',
		weakness: 'Ground',
	},
	{
		pokemonName: 'Mewtwo',
		pokemonHeight: 2,
		type: 'Psychic',
		weakness: 'Ghost',
	},

	{
		pokemonName: 'Lugia',
		pokemonHeight: 5.2,
		type: 'Flying',
		weakness: 'Rock',
	},
];
/*
for (let i = 0; i < pokemonList.length; i++) {
	document.write(
		' ' +
			pokemonList[i].pokemonName +
			' ' +
			'(' +
			'Height: ' +
			pokemonList[i].pokemonHeight +
			', ' +
			'Type: ' +
			pokemonList[i].type +
			')' + "<br>" 
	);
	if (pokemonList[i].pokemonHeight > 1) {
		document.write(pokemonList[i].pokemonName + ' is a gigantic pokemon!' + "<br>") ;
	}
}
*/


pokemonList.forEach(function(pokemon){
document.write(pokemon.pokemonName + " " + "(Height: " + pokemon.pokemonHeight + ")" + " Type: " + pokemon.type + " Weakness: " + pokemon.weakness + "<br>")
})