//-Crear un array con los números del 1 al 5 y agregue el 6 al final.-
console.log(
  "Crear un array con los números del 1 al 5 y agregue el 6 al final"
);
const vectorA = [10, 4, 3, 4, 5];
vectorA.push(6);
console.log(vectorA);
//-Elimine el primer elemento del array anterior.-
console.log("");
console.log("Elimine el primer elemento del array anterior");

let vectorC = [1, 2, 3, 4, 5];
vectorC.shift();
console.log(vectorC);
//-Use map para duplicar los valores del array.-
console.log("");
console.log("Use map para duplicar los valores del array.");
const vectorB = vectorA.map((n) => {
  return n * 2;
});

console.log(vectorB);

//-Use filter para obtener solo los números pares.-
console.log("Use filter para obtener solo los números pares.");
const resultado = vectorA.filter((n) => n % 2 == 0);
console.log(resultado);

//-Sume todos los valores usando reduce.
console.log("Sume todos los valores usando reduce.");
const sumaNumero = vectorA.reduce((acumulado, actual) => acumulado + actual, 0);
console.log(sumaNumero);

//-Ordene el array de forma descendente.
console.log("Ordene el array de forma descendente.");
let orden = document.getElementById("ordenVector");
orden.innerText = vectorA.sort((a, b) => b - a);

//Crear un objeto con nombre, edad y ciudad.

console.log("Crear un objeto con nombre, edad y ciudad.");

for (let day = 0; day < 4; day = day + 1) {}

/*let day = 0;
while(day < 10){
day = day+1
console.log("dia"+ day)


} */
