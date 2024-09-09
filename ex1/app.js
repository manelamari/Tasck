let tableau = [];

for (let i = 0; i < 10; i++) {
  tableau.push(Math.floor(Math.random() * 100) + 1);
}


let max = tableau[0];
for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] > max) {
        max = tableau[i];
    }
}


let min = tableau[0];
for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] < min) {
        min = tableau[i];
    }
}


console.log("Tableau: ", tableau);
console.log("Le plus grand élément est: " + max);
console.log("Le plus petit élément est: " + min);