//? Instalar axios para hacer llamadas a servicios externos

import axios from "axios";

axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(function (response) {
    // handle success
    console.log("Succes!!!");
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log("ERROR!!!");
    console.log(error);
  });