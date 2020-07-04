var pokemonRepository = (function () {
	var pokemonList = [];

	var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

	function add(pokemon) {
        pokemonList.push(pokemon);
	}
	
	function getAll() {
		console.log(pokemonList)
		return pokemonList;
	}
	
	function showDetails(item) {
		loadDetails(item).then(function () {
		  console.log(item);
		});
	  }

	function addListItem(pokemon) {
		let pokemonList = document.querySelector('.pokemon-list');
		var listItem = document.createElement('li');
		var button = document.createElement('button');
		button.textContent = pokemon.name.toUpperCase();
		button.classList.add('styling');
		listItem.appendChild(button);
		pokemonList.appendChild(listItem);
		button.addEventListener('click', function(){
			showDetails(pokemon);
		});
	}

	
	function loadList() {
		return fetch(apiUrl).then(function (response) {
		  return response.json();
		}).then(function (json) {
		  json.results.forEach(function (item) {
			var pokemon = {
			  name: item.name,
			  detailsUrl: item.url
			};
			add(pokemon);
		  });
		}).catch(function (e) {
		  console.error(e);
		})
	  }


	  function loadDetails(item) {
		var url = item.detailsUrl;
		return fetch(url).then(function (response) {
		  return response.json();
		}).then(function (details) {
		  // Now we add the details to the item
		  item.imageUrl = details.sprites.front_default;
		  item.height = details.height;
		  item.types = details.types;
		}).catch(function (e) {
		  console.error(e);
		});
	  }


	return {
		add: add,
		getAll: getAll,
loadList: loadList,
		addListItem: addListItem
	};


})();



pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});