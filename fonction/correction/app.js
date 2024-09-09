function generateArrayWithRandomValues(size, limit = 100) {
  return Array.from({ length: size }, () => {
    return Math.floor(Math.random() * limit) + 1;
  });
}

const tb1 = generateArrayWithRandomValues(10, 5);
const tb2 = generateArrayWithRandomValues(5);
const tb3 = generateArrayWithRandomValues(3);
const tb4 = generateArrayWithRandomValues(7);

function sumOfMultiplesOf(number, arr) {
  let sum = 0;
  for (let value of arr) {
    if (value % number === 0) {
      sum += value;
    }
  }
  return sum;
}

const sommeMultiplesDe3Tableau1 = sumOfMultiplesOf(3, tb1);
const sommeMultiplesDe3Tableau2 = sumOfMultiplesOf(3, tb2);
const sommeMultiplesDe3Tableau3 = sumOfMultiplesOf(3, tb3);
const sommeMultiplesDe3Tableau4 = sumOfMultiplesOf(3, tb4);

console.log(`
    Somme multiples 3 tb1 : ${sommeMultiplesDe3Tableau1}
    Somme multiples 3 tb2 : ${sommeMultiplesDe3Tableau2}
    Somme multiples 3 tb3 : ${sommeMultiplesDe3Tableau3}
    Somme multiples 3 tb4 : ${sommeMultiplesDe3Tableau4}
    `);
