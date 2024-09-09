let phrase = prompt("Entrez une phrase :");

let tableau = [];
let mot = "";
let longueur = phrase.length;

for (let i = 0; i < longueur; i++) {
  if (phrase[i] !== " ") {
    mot += phrase[i];
  } else {
    tableau.push(mot);
    mot = "";
  }
}

tableau.push(mot);


let tableauInverse = [];
let taille = tableau.length;
for (let i = 0; i < taille; i++) {
  tableauInverse[i] = tableau[taille - 1 - i];
}


let nouvellePhrase = "";
for (let i = 0; i < taille; i++) {
  nouvellePhrase += tableauInverse[i];
  if (i < taille - 1) {
    nouvellePhrase += " ";
  }
}

console.log("Phrase inversée : " + nouvellePhrase);
