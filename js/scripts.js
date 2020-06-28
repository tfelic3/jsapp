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


	function showDetails(pokemon){
		console.log(pokemon);
		}

	function addListItem(pokemon) {
		let pokemonList = document.querySelector('.pokemon-list');
		var listItem = document.createElement('li');
		var button = document.createElement('button');
		button.textContent = pokemon.pokemonName;
		button.classList.add('styling');
		listItem.appendChild(button);
		pokemonList.appendChild(listItem);
		button.addEventListener('click', function(){
			showDetails(pokemon);
		});
	}

	

	function add(pokemon) {
		pokemonList.push(pokemon);
	}

	function getAll() {
		return pokemonList;
	}

	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem
	};
})();

pokemonRepository.getAll().forEach(function (pokemon) {
	pokemonRepository.addListItem(pokemon);
});
