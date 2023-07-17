/*Crea una función que devuelva la tabla 
de múltiplicar completa del número que le indiquemos ✍*/

function tablaMultiplicar(numero) {
    let tabla = '';
  
    for (let i = 1; i <= 10; i++) {
      const resultado = numero * i;
      tabla += numero + ' x ' + i + ' = ' + resultado + '\n';
    }
  
    return tabla;
  }
  
  const numero = 8; /*Resultado según el nº marcado en las "".*/
  const resultadoTabla = tablaMultiplicar(numero);
  console.log(resultadoTabla);
  