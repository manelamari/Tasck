function rotateArray(arr, k) {

  var n = arr.length;

  var newArr = [];
  k = k % n;

  // Remplir le nouveau tableau
  for (var i = 0; i < n; i++) {
    // Calcul de la nouvelle position après la rotation
    var newPosition = (i + k) % n;
    newArr[newPosition] = arr[i];
  }

  return newArr;
}
var tableau = [1, 2, 3, 4, 5];
var rotations = 2;
var resultat = rotateArray(tableau, rotations);
console.log(resultat);