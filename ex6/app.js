
let taille1 = Math.floor(Math.random() * 5) + 1;
let taille2 = Math.floor(Math.random() * 5) + 1;


let tableau1 = [];
let tableau2 = [];


for (let i = 0; i < taille1; i++) {
  tableau1[i] = Math.floor(Math.random() * 10) + 1;
}


for (let i = 0; i < taille2; i++) {
  tableau2[i] = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}


let tableauFusion = [];
let tailleMax = taille1 > taille2 ? taille1 : taille2;

for (let i = 0; i < tailleMax; i++) {
  if (i < taille1) {
    tableauFusion.push(tableau1[i]);
  }
  if (i < taille2) {
    tableauFusion.push(tableau2[i]);
  }
}


console.log("Tableau 1 : ", tableau1);
console.log("Tableau 2 : ", tableau2);
console.log("Tableau fusionné : ", tableauFusion);
