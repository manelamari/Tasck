let tableau = [];
for (let i = 0; i < 10; i++) {
  tableau[i] = Math.floor(Math.random() * 100) + 1;
}

let sommePairs = 0;
let sommeImpairs = 0;

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    sommePairs += tableau[i];
  } else {
    sommeImpairs += tableau[i];
  }
}


console.log("Tableau : ", tableau);
console.log("Somme des éléments aux indices pairs : " + sommePairs);
console.log("Somme des éléments aux indices impairs : " + sommeImpairs);