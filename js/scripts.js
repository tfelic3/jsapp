var pokemonRepository = (function () {
	var pokemonList = [];

	var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

	function add(pokemon) {
		pokemonList.push(pokemon);
	}

	function getAll() {
		return pokemonList;
	}

	function showDetails(item) {
		loadDetails(item).then(function () {
			console.log(item);
			function showModal() {
				var modalContainer = document.querySelector('#modal-container');
				modalContainer.classList.add('is-visible');

			}

			showModal();

			function showModal(title, text) {
				var modalContainer = document.querySelector('#modal-container');

				// Clear all existing modal content
				modalContainer.innerHTML = '';

				var modal = document.createElement('div');
				modal.classList.add('modal');

				// Add the new modal content
				var closeButtonElement = document.createElement('button');
				closeButtonElement.classList.add('modal-close');
				closeButtonElement.innerText = 'Close';

				var titleElement = document.createElement('h1');
				titleElement.innerText = 'Pokemon Name: ' + item.name.charAt(0).toUpperCase()+item.name.slice(1);

				var pokeImage = document.createElement('img');
				pokeImage.id ="pix";
				pokeImage.src = item.imageUrl;

				var pokemonType = document.createElement('p');
				pokemonType.innerText = "Pokemon Type: " + item.types[0]["type"]["name"].charAt(0).toUpperCase()+item.types[0]["type"]["name"].slice(1);

				var pokemonHeight = document.createElement('p');
				pokemonHeight.innerText = 'Pokemon Height: ' + item.height;

				modal.appendChild(closeButtonElement);
				modal.appendChild(titleElement);
				modal.appendChild(pokeImage);
				modal.appendChild(pokemonType);
				modal.appendChild(pokemonHeight);
				modalContainer.appendChild(modal);

				modalContainer.classList.add('is-visible');

				function hideModal() {
					modalContainer.classList.remove('is-visible');

				}
	
				closeButtonElement.addEventListener('click', hideModal)
			

				modalContainer.addEventListener('click', (e) => {
					// Since this is also triggered when clicking INSIDE the modal
					// We only want to close if the user clicks directly on the overlay
					var target = e.target;
					if (target === modalContainer) {
					  hideModal();
					}
				  });
				window.addEventListener('keydown', (e) => {
					if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
					  hideModal();  
					}
				  });
			}

			function hideModal() {
				modalContainer.classList.remove('is-visible');

			  }

			
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
		button.addEventListener('click', function () {
			showDetails(pokemon);
		});
	}

	function loadList() {
		return fetch(apiUrl)
			.then(function (response) {
				return response.json();
			})
			.then(function (json) {
				json.results.forEach(function (item) {
					var pokemon = {
						name: item.name,
						detailsUrl: item.url,
					};
					add(pokemon);
				});
			})
			.catch(function (e) {
				console.error(e);
			});
	}

	function loadDetails(item) {
		var url = item.detailsUrl;
		return fetch(url)
			.then(function (response) {
				return response.json();
			})
			.then(function (details) {
				// Now we add the details to the item
				item.imageUrl = details.sprites.front_default;
				item.height = details.height;
				item.types = details.types;
			})
			.catch(function (e) {
				console.error(e);
			});
	}

	return {
		add: add,
		getAll: getAll,
		loadList: loadList,
		addListItem: addListItem,
	};
})();

pokemonRepository.loadList().then(function () {
	pokemonRepository.getAll().forEach(function (pokemon) {
		pokemonRepository.addListItem(pokemon);
	});
});
