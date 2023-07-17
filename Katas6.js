/*Basándote en la especificaciones del objeto anterior crea la clase planeta 
y haz instancias de, al menos dos planetas,más abajo te especifico las propiedades: 🪐🐱‍🚀
nombre del planeta, km del sol, planetas vecinos, satélites, método saludar*/

class Planeta {
    constructor(nombre, distanciaSol, vecinos, satelites) {
      this.nombre = nombre;
      this.distanciaSol = distanciaSol;
      this.vecinos = vecinos;
      this.satelites = satelites;
    }
  
    saludar() {
      console.log(`Hola, soy el planeta ${this.nombre} 🪐🐱‍🚀`);
    }
  }
  
  // Crear instancias de planetas
  const planetaTierra = new Planeta(
    "Tierra",
    "150.000.000 km",
    { delante: "Venus", detras: "Marte" },
    ["Luna"]
  );
  
  const planetaMarte = new Planeta(
    "Marte",
    "227.940.000 km",
    { delante: "Tierra", detras: "Júpiter" },
    ["Fobos", "Deimos"]
  );
  
  // Ejemplo de llamada al método saludar de cada planeta
  planetaTierra.saludar(); // Mensaje salida: Hola, soy el planeta Tierra 🪐🐱‍🚀
  planetaMarte.saludar(); // Mensaje salida: Hola, soy el planeta Marte 🪐🐱‍🚀
  