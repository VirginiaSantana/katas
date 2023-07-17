/*Crea una función para felicitar el cumpleaños que pueda darte respuesta en tres idiomas ( español, inglés y Alemán) y que tenga una respuesta con iconos, en el caso de que no sea ninguno de los tres idiomas🎂

¡Feliz cumpleaños Pepita!

Happy birthday Pepita!

Alles Gute zum Geburtstag, Pepita!*/


function felicitarCumpleaños(idioma) {
    let mensaje;
  
    switch (idioma) {
      case "español":
        mensaje = "¡Feliz cumpleaños Pepita!";
        console.log(mensaje);
        break;

      case "inglés":
        mensaje = "Happy birthday Pepita!";
        console.log(mensaje);
        break;

      case "alemán":
        mensaje = "Alles Gute zum Geburtstag, Pepita!";
        console.log(mensaje);
        break;

      default:
        mensaje = "🎂🎂🎂🎂";
        console.log(mensaje);
        break;
    }
  
    return mensaje;
  }
  
  felicitarCumpleaños ("inglés") /* Según el case que se ponga en las "", así será el resultado.*/