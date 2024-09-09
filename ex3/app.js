let taille = 5;


let tableau1 = [];
let tableau2 = [];

for (let i = 0; i < taille; i++) {
  tableau1[i] = Math.floor(Math.random() * 100) + 1;
  tableau2[i] = Math.floor(Math.random() * 100) + 1;
}

let identiques = true;

for (let i = 0; i < taille; i++) {
  if (tableau1[i] !== tableau2[i]) {
    identiques = false;
    break;
  }
}

console.log("Tableau 1: ", tableau1);
console.log("Tableau 2: ", tableau2);

if (identiques) {
  console.log("Les deux tableaux sont identiques.");
} else {
  console.log("Les deux tableaux sont différents.");
}
