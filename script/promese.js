let dado = Math.floor(Math.random() * 6 + 1);

console.log("El numero resultante es " + dado);

function promesa() {
  const promesa = new Promise((resolve, reject) => {
    if (dado % 2 == 0) {
      resolve("El numero es par");
    } else {
      reject("El numero es inpar");
    }
  });
  promesa
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error));
}

promesa();
