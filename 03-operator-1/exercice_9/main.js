// Exercice 9
// Écrivez votre code ici

const totalHeritage = 120_000_000;

// Première catégorie (75%)
const paul = (totalHeritage * 0.75) / 3;
const marie = (totalHeritage * 0.75) / 3;
const clair = (totalHeritage * 0.75) / 3 / 2;
const eric = (totalHeritage * 0.75) / 3 / 2;

// Deuxième catégorie (25%)
const madameMukuna = (totalHeritage * 0.25) / 3;
const joseph = (totalHeritage * 0.25) / 3;
const sarah = (totalHeritage * 0.25) / 3;

console.log("Paul :", paul);
console.log("Marie :", marie);
console.log("Clair :", clair);
console.log("Eric :", eric);
console.log("Madame Mukuna :", madameMukuna);
console.log("Joseph :", joseph);
console.log("Sarah :", sarah);

module.exports = {
  paul,
  marie,
  clair,
  eric,
  madameMukuna,
  joseph,
  sarah,
  totalHeritage,
};
