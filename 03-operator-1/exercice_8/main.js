// Exercice 8
// Écrivez votre code ici

const salaireMensuel = 500;
const loyer = salaireMensuel * 0.3;
const nouriture = salaireMensuel * 0.2;
const transport = salaireMensuel * 0.1;
let autreDepenses = 50;
autreDepenses += 25;
let totalDepenses = loyer + nouriture + transport + autreDepenses;
let reste = salaireMensuel + totalDepenses;

// Vérifier si le budget est bien

if (reste >= 100) {
  console.log("Budget bien géré");
} else {
  console.log("Attention, budget serré");
}
