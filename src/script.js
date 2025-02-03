const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const pokemonName = document.getElementById('pokemon-name');
    const pokemonId = document.getElementById('pokemon-id');
    const weight = document.getElementById('weight');
    const height = document.getElementById('height');
    const hp = document.getElementById('hp');
    const attack = document.getElementById('attack');
    const defense = document.getElementById('defense');
    const specialAttack = document.getElementById('special-attack');
    const specialDefense = document.getElementById('special-defense');
    const speed = document.getElementById('speed');
    const types = document.getElementById('types');
    const sprite = document.getElementById('sprite');

    searchButton.addEventListener('click', async () => {
      const searchTerm = searchInput.value.toLowerCase();
      const apiUrl = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          if (searchTerm === 'red') {
            alert('Pokémon not found');
          } else {
            alert('Pokémon not found');
          }
          clearPokemonInfo();
          return;
        }
        const data = await response.json();

        pokemonName.textContent = data.name.toUpperCase();
        pokemonId.textContent = `#${data.id}`;
        weight.textContent = data.weight;
        height.textContent = data.height;
        hp.textContent = data.stats[0].base_stat;
        attack.textContent = data.stats[1].base_stat;
        defense.textContent = data.stats[2].base_stat;
        specialAttack.textContent = data.stats[3].base_stat;
        specialDefense.textContent = data.stats[4].base_stat;
        speed.textContent = data.stats[5].base_stat;
        sprite.src = data.sprites.front_default;

        types.innerHTML = ''; // Clear previous types
        data.types.forEach(type => {
          const typeElement = document.createElement('span');
          typeElement.classList.add('type');
          typeElement.textContent = type.type.name.toUpperCase();
          types.appendChild(typeElement);
        });
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        alert('An error occurred. Please try again later.');
        clearPokemonInfo();
      }
    });

    function clearPokemonInfo() {
      pokemonName.textContent = '';
      pokemonId.textContent = '';
      weight.textContent = '';
      height.textContent = '';
      hp.textContent = '';
      attack.textContent = '';
      defense.textContent = '';
      specialAttack.textContent = '';
      specialDefense.textContent = '';
      speed.textContent = '';
      types.innerHTML = '';
      sprite.src = '';
    }