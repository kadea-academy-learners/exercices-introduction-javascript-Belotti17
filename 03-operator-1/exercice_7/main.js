// Exercice 7
// Écrivez votre code ici

const ageEnfant = 10;
const agePere = ageEnfant * 2;
const ageMere = agePere - 5;
const ageGrandPere = ageMere * 2 + ageEnfant / 2;
const ageOncle = agePere + 10;

console.log("Âge de l’enfant :", ageEnfant);
console.log("Âge du père :", agePere);
console.log("Âge de la mère :", ageMere);
console.log("Âge du grand-père :", ageGrandPere);
console.log("Âge de l’oncle :", ageOncle);

module.exports = { ageEnfant, agePere, ageMere, ageGrandPere, ageOncle };
