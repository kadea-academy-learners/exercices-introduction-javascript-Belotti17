// Exercice 7
// Écrivez votre code ici
let ageEnfant = 10;
let agePère = ageEnfant * 2;
let ageMère = agePère - 5;
let ageGrandPère = ageMère * 2 + ageEnfant / 2;
let ageOncle = agePère + 10;

// Affichage des résultats

console.log("Âge de l’enfant :", ageEnfant, "ans");
console.log("Âge du père :", agePère, "ans");
console.log("Âge de la mère :", ageMère, "ans");
console.log("Âge du grand-père :", ageGrandPère, "ans");
console.log("Âge de l’oncle :", ageOncle, "ans");

module.exports = {
  ageEnfant,
  agePère,
  ageMère,
  ageGrandPère,
  ageOncle,
};
