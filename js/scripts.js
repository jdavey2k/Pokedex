let pokemonlist = [
        { name: "gengar", types: ["ghost", "poison"], height: 104 },
        { name: "Jynx", types: ["ice", "psychic"], height: 145 },
        { name: "slowpoke", types: ["psychic", "water"], height: 42 },
      ];
      
      for (let i = 0; i < pokemonlist.length; i++) {
        let pokemon = pokemonlist[i];
        document.write(pokemon.name + ", " + pokemon.height + "cm");
      
        if (pokemon.height > 130) {
          document.write(" - Wow, that's big!");
        }
      
        document.write("<br>");
      }