// Exercice 9
// Écrivez votre code ici

// Fonction pour calculer l'héritage
function calculerHeritage(patrimoineTotal) {
  // Répartition par catégories
  const partPremiereCategorie = 0.75 * patrimoineTotal;
  const partDeuxiemeCategorie = 0.25 * patrimoineTotal;

  // Première catégorie : enfants
  const enfants = ["Paul", "Marie", "Alain"];
  const nbPartsPremiereCat = enfants.length;
  const partParEnfant = partPremiereCategorie / nbPartsPremiereCat;

  // Alain est décédé, sa part est partagée entre Éric et Claire
  const partAlain = partParEnfant;
  const partEric = partAlain / 2;
  const partClaire = partAlain / 2;

  // Deuxième catégorie : conjoint + frères/sœurs
  const deuxiemeCategorie = ["Madame MUKUNA", "Joseph", "Sarah"];
  const nbPartsDeuxiemeCat = deuxiemeCategorie.length;
  const partParMembre = partDeuxiemeCategorie / nbPartsDeuxiemeCat;

  // Héritages finaux
  return {
    Paul: partParEnfant,
    Marie: partParEnfant,
    Éric: partEric,
    Claire: partClaire,
    "Madame MUKUNA": partParMembre,
    Joseph: partParMembre,
    Sarah: partParMembre,
  };
}

if (require.main === module) {
  const patrimoineTotal = 120_000_000;
  const heritages = calculerHeritage(patrimoineTotal);

  console.log("=== Répartition de l’héritage de M. Jean MUKUNA ===");
  for (let [nom, montant] of Object.entries(heritages)) {
    console.log(`${nom} reçoit : ${montant.toLocaleString("fr-CD")} CDF`);
  }
}

module.exports = calculerHeritage;
