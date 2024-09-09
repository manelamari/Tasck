
let tableau = [3, -1, 0, 4, 5, -2, 6, 0, -3];


let produit = 1;
let aDesPositifs = false;


for (let i = 0; i < tableau.length; i++) {
  if (tableau[i] > 0) {
    produit *= tableau[i];
    aDesPositifs = true;
  }
}


if (!aDesPositifs) {
  console.log("Aucun élément positif trouvé.");
} else {
  console.log("Le produit des éléments positifs est : " + produit);
}
