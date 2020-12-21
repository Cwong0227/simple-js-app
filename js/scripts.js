let pokemonRepository = (function() {
    let pokemonList = [{
            name: 'Jigglypuff',
            height: 0.5,
            types: ['fairy', 'normal']
        },
        {
            name: 'Snorlax',
            height: 2.1,
            types: ['normal']
        },
        {
            name: 'Psyduck',
            height: 0.8,
            types: ['water']
        }
    ];

    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener("click", function(event) {
            showDetails(pokemon);
        });
    }

    function showDetails(pokemon) {
        console.log(pokemon)
    }


    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem
    };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon)
});