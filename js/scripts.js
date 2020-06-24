var pokemonList = [
	{
		pokemonName: 'Pikachu',
		pokemonHeight: 0.4,
		type: 'electric',
		weakness: 'ground',
	},
	{
		pokemonName: 'Mewtwo',
		pokemonHeight: 2,
		type: 'psychic',
		weakness: 'ghost',
	},

	{
		pokemonName: 'Lugia',
		pokemonHeight: 5.2,
		type: 'flying',
		weakness: 'rock',
	},
];

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
			')'
	);
	if (pokemonList[i].pokemonHeight > 1) {
		document.write(' - That is a huge pokemon!');
	}
}
