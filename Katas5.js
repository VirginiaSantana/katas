/*Crea un objeto planeta tierra, que tenga las siguientes propiedades: su distancia del sol, sus vecinos 
(especificando que planeta tiene delante y cuál detrás), una lista de su composición atmosférica, y que también tenga 
un método saludar que devuelva en consola Hola soy el planeta tierra 🌍
km del sol : 150.000.000
composición atmosférica: nitrógeno, oxígeno, argón
más tarde añade con código la propiedad satélite y dale el valor de luna, también añade la propiedad planeta habitado 
con el valor true, y posteriormente eliminalo.*/

const planetaTierra = {
    distanciaSol: "150.000.000 km",
    vecinos: {
      delante: "Venus",
      detras: "Marte"
    },
    composicionAtmosferica: ["nitrógeno", "oxígeno", "argón"],
    saludar: function() {
      console.log("Hola, soy el planeta Tierra 🌍");
    }
  };
  
  planetaTierra.saludar(); // Mensaje salida: Hola, soy el planeta Tierra 🌍
  
  // Añadir la propiedad "satelite" con valor "luna"
  planetaTierra.satelite = "luna";
  
  // Añadir la propiedad "planetaHabitado" con valor true
  planetaTierra.planetaHabitado = true;
  
  // Eliminar la propiedad "planetaHabitado"
  delete planetaTierra.planetaHabitado;
