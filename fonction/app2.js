// v1

// const tb1 = Array.from({ length: 10 }, function () {
//   return Math.floor(Math.random() * 100) + 1;
// });

// const tb2 = Array.from({ length: 5 }, () => {
//   return Math.floor(Math.random() * 100) + 1;
// });

// Arrow functions
// Fat arrow functions
// Fonctions flechées
// const tb3 = Array.from(
//   { length: 3 },
//   () => Math.floor(Math.random() * 100) + 1
// );

// const tb4 = Array.from(
//   { length: 7 },
//   () => Math.floor(Math.random() * 100) + 1
// );

// v2
function generateArrayWithRandomValues(size, limit = 100) {
  return Array.from({ length: size }, () => {
    return Math.floor(Math.random() * limit) + 1;
  });
}

const tb1 = generateArrayWithRandomValues(10, 5);
const tb2 = generateArrayWithRandomValues(5);
const tb3 = generateArrayWithRandomValues(3);
const tb4 = generateArrayWithRandomValues(7);

// let sommeMultiplesDe3Tableau1 = 0;
// for (let i = 0; i < tb1.length; i++) {
//   if (tb1[i] % 3 === 0) {
//     sommeMultiplesDe3Tableau1 += tb1[i];
//   }
// }

// let sommeMultiplesDe3Tableau2 = 0;
// for (let i = 0; i < tb2.length; i++) {
//   if (tb2[i] % 3 === 0) {
//     sommeMultiplesDe3Tableau2 += tb2[i];
//   }
// }

// let sommeMultiplesDe3Tableau3 = 0;
// for (let i = 0; i < tb3.length; i++) {
//   if (tb3[i] % 3 === 0) {
//     sommeMultiplesDe3Tableau3 += tb3[i];
//   }
// }
// let sommeMultiplesDe3Tableau4 = 0;
// for (let i = 0; i < tb2.length; i++) {
//   if (tb4[i] % 3 === 0) {
//     sommeMultiplesDe3Tableau4 += tb4[i];
//   }
// }

// console.log(`
//     Somme multiples 3 tb1 : ${sommeMultiplesDe3Tableau1}
//     Somme multiples 3 tb2 : ${sommeMultiplesDe3Tableau2}
//     Somme multiples 3 tb3 : ${sommeMultiplesDe3Tableau3}
//     Somme multiples 3 tb4 : ${sommeMultiplesDe3Tableau4}
//     `);


function sommeMultiplesDeTrois(tab) {
  let somme = 0; // Initialiser la somme à 0

  for (let i = 0; i < tab.length; i++) {
    if (tab[i] % 3 === 0) {
      // Vérifier si l'élément est un multiple de 3
      somme += tab[i]; // Ajouter cet élément à la somme
    }
  }

  return somme; // Retourner la somme des multiples de 3
}

let a = sommeMultiplesDeTrois(tb1);
let b = sommeMultiplesDeTrois(tb2);
let c = sommeMultiplesDeTrois(tb3);
let d = sommeMultiplesDeTrois(tb4);

console.log(`
    Somme multiples 3 tb1 : ${a}
    Somme multiples 3 tb2 : ${b}
    Somme multiples 3 tb3 : ${c}
    Somme multiples 3 tb4 : ${d}
    `);

