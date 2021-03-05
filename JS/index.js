//////////  Récupération des données ours en peluches avec l'API fetch.

fetch('http://localhost:3000/api/cameras')
  .then((response) => response.json())
  .then((response) => {
  
console.log(response);
