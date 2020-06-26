var pokemonRepository = (function () {
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

	return {
		add: function (pokemon) {
			if (typeof pokemon === "object"){
			pokemonList.push(pokemon);
			} else {(console.log("This is not a pokemon"))			
		}},

getAll: function(){
	return pokemonList;
}

	};

})();

pokemonRepository.add ({pokemonName: "Blaise", pokemonHeight: 2.07, type: "Electric", Weakness: "Flying" });



pokemonRepository.getAll().forEach(function(pokemon){
document.write(pokemon.pokemonName + " " + "(Height: " + pokemon.pokemonHeight + ")" + " Type: " + pokemon.type + " Weakness: " + pokemon.weakness + "<br>")
}) 
