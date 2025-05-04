let who = [
  "Mi perro",
  "Un ninja",
  "Mi abuela",
  "El repartidor de pizza",
  "Un marciano",
  "Mi clon malvado",
  "El pato del vecino",
  "Una cabra con sombrero",
  "Un fantasma bromista",
  "El wifi con conciencia",
];

let action = [
  "se comió mi tarea",
  "me secuestró para una misión secreta",
  "me retó a una batalla de baile",
  "apagó la luz con un hechizo",
  "confundió mi casa con un castillo",
  "me encerró en el baño por accidente",
  "reemplazó mi teclado por gelatina",
  "escondió mi mochila en el techo",
  "me hipnotizó con un ukulele",
  "rompió el espacio-tiempo",
];

let where = [
  "en la luna",
  "en mi cocina",
  "en una dimensión paralela",
  "en la azotea del supermercado",
  "en un videojuego",
  "en medio del tráfico",
  "en la máquina del tiempo",
  "en el baño del cine",
  "en la fila del banco",
  "en un sueño muy real",
];

let indexEx = 1;

let listExercises = ["Generador de escusas", "ejercicio 2", "ejercicio 3"];
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    exerciseMachine();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key == "ArrowLeft") {
    preEx();
  }
});


document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    nextEx();
  }
});



function exerciseMachine() {
  let showEX = document.getElementById("showIndex");
  showEX.innerText = listExercises[indexEx - 1];

  switch (indexEx) {
    case 1:
      let numberWho = Math.floor(Math.random() * 10);
      let numberAction = Math.floor(Math.random() * 10);
      let numberWhere = Math.floor(Math.random() * 10);

      let randomWho = who[numberWho];
      let randomAction = action[numberAction];
      let randomWhere = where[numberWhere];
      let excuses = document.getElementById("excuses");
      excuses.innerText = randomWho + " " + randomAction + " " + randomWhere;

      break;

    case 2:
      numberA = document.getElementById("excuses");
      numberA.innerText = indexEx;

      break;
    case 3:
      numberA = document.getElementById("excuses");

      numberA.innerText = indexEx;

      break;
  }
}
function nextEx() {
  if (indexEx < 3) {
    indexEx = indexEx + 1;
  }


  exerciseMachine();
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    boton.classList.add("active");
    boton.click(); // opcional: también ejecuta el botón
  }
});







let btn = document.getElementById("button");
function preEx() {
  if (indexEx > 1) {
    indexEx = indexEx - 1;
  }
  exerciseMachine();
 
}

function generateExcuses() {
  let numberWho = Math.floor(Math.random() * 10);
  let numberAction = Math.floor(Math.random() * 10);
  let numberWhere = Math.floor(Math.random() * 10);

  let randomWho = who[numberWho];
  let randomAction = action[numberAction];
  let randomWhere = where[numberWhere];
  let excuses = document.getElementById("excuses");
  excuses.innerText = randomWho + " " + randomAction + " " + randomWhere;
}
