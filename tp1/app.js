1//
function makeBetweenFunc(min, max) {
  return function (nombre) {
    return nombre >= min && nombre <= max;
  };
}
1//Utilisation, vous pouvez essayer avec des ranges entre 18 et 100
const inRange = makeBetweenFunc(18, 100);

console.log(inRange(17));
console.log(inRange(68));

//  créer une fisNinetiesonction ""
// qui vérifie si une année est comprise entre 1900 et 2000 :
const isNineties = makeBetweenFunc(1900, 2000);

console.log(isNineties(1995));
// créer une fonction "isNiceWeather
const isNiceWeather = makeBetweenFunc(18, 23);

console.log(isNiceWeather(20));
console.log(isNiceWeather(25));

