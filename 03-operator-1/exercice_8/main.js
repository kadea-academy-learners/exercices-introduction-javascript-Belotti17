// Exercice 8
// Écrivez votre code ici

const salaireMensuel = 500;
const loyer = salaireMensuel * 0.3;
const nourriture = salaireMensuel * 0.2;
const transport = salaireMensuel * 0.1;
let autresDepenses = 50;
autresDepenses += 25;

const totalDepenses = loyer + nourriture + transport + autresDepenses;
const reste = salaireMensuel - totalDepenses;

console.log("Salaire mensuel :", salaireMensuel);
console.log("Loyer :", loyer);
console.log("Nourriture :", nourriture);
console.log("Transport :", transport);
console.log("Autres dépenses :", autresDepenses);
console.log("Total dépenses :", totalDepenses);
console.log("Reste :", reste);

module.exports = {
  salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste,
};
