let alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let nombre = parseInt(prompt("Entrez un nombre entre 0 et 25"));


if (nombre >= 0 && nombre <= 25) {
  console.log("La lettre correspondante est : " + alphabet[nombre-1]);
} else {
  console.log("Veuillez entrer un nombre valide entre 0 et 25.");
}

