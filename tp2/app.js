// function getPriceWithTaxes(price, taxRate) {
//    return price * (1 + taxRate);
// }
// // Exemple
// console.log(getPriceWithTaxes(100, 0.2)); // 120
// console.log(getPriceWithTaxes(50, 0.1));//55

2//+version, curryfiée
function getPriceWithTaxes(taxRate) {
  return function (price) {
    return price * (1+taxRate);
  };
}




// 3/Fonction pour la TVA (20%)
const getVAT = getPriceWithTaxes(0.2);

// Fonction pour une taxe régionale (10%)
const getRegionTax = getPriceWithTaxes(0.1);

// Fonction pour une taxe réduite (5%)
const getReducedVAT = getPriceWithTaxes(0.05);

// Utilisation des fonctions
console.log(getVAT(100)); // Affiche 120 (100 + 20% de TVA)
console.log(getRegionTax(50)); // Affiche 55 (50 + 10% de taxe régionale)
console.log(getReducedVAT(80));



//4/ Calculer le prix final pour un produit avec 20% de TVA
const priceWithVAT = getVAT(200); // 200 + 20% = 240
console.log(priceWithVAT); // Affiche 240

// Calculer le prix final pour un produit avec une taxe régionale de 10%
const priceWithRegionTax = getRegionTax(150); // 150 + 10% = 165
console.log(priceWithRegionTax); // Affiche 165

// Calculer le prix final pour un produit avec une TVA réduite de 5%
const priceWithReducedVAT = getReducedVAT(300); // 300 + 5% = 315
console.log(priceWithReducedVAT); // 315
