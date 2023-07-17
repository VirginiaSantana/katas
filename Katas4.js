/*Crea una función que sea un contador de las ovejas que están dormidas 🐑
  const sleepSheep = [true,  true,  true, false,
true,  true,  true,  true ,
true,  false, true,  false,
true,  false, false, true ,
true,  true,  true,  true ,
false, false, true,  true, false] */
  
  /*console.log(true)
  const sleepSheep = dormidas.reduce(function (contador, dormida){
    if(true==="dormidas"){
      return contador +1;
    }else{
    }return contador;
  },0) */

  /*¡OJO! PENDIENTE DE REVISAR POR QUÉ NO FUNCIONAN ESTOS 2 EJERCICIOS. */

const sleepSheep = [true,  true,  true, false,
true,  true,  true,  true ,
true,  false, true,  false,
true,  false, false, true ,
true,  true,  true,  true ,
false, false, true,  true, false];

function countSleepSheep(sheepArray) {
  let counter = 0;
  for (let i = 0; i < sheepArray.length; i++) {
    if (sheepArray[i] === true) {
      counter++;
    }
  }
  return counter;
}
console.log(countSleepSheep(sleepSheep));

/*Crea una función que sea un contador de las ovejas que están dormidas 🐑
  const sleepSheep = [true,  true,  true, false,
true,  true,  true,  true ,
true,  false, true,  false,
true,  false, false, true ,
true,  true,  true,  true ,
false, false, true,  true, false]

let sleeps = sleepSheep.filter(sheep ==> sheep === true)
console.log(sleeps.length);*/
// OTRA OPCIÓN CON MENOS CÓDIGO: Al poner length no hace un nuevo array y da como resultado solo los true.
