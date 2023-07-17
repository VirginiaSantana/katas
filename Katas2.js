/*Crea una función que sea un dado, es decir, 
que devuelva un número aleatorio de 1 al 6 🎲*/

function lanzarDado() {
    // Generar un número aleatorio entre 1 y 6
    const numeroAleatorio = Math.floor(Math.random() * 6) + 1;

  return numeroAleatorio;
}
const resultado = lanzarDado();
  console.log(resultado);
  