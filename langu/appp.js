const language = prompt("Entrer une langue : ").toLowerCase();

switch (language) {
  case "french":
    alert("Bonjour");
    break;
  case "english":
    alert("Hello");
    break;
  case "german":
    alert("Guten tag");
    break;
  case "spanish":
    alert("Hola");
    break;
  default:
    alert("Langue non supportée");
}
