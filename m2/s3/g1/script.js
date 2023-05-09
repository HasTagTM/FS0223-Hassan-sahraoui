class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  confrontaEtà = function (obj) {
    if (this.age > obj["age"]) {
      console.log(this.firstName + " è più adulto di " + obj["firstName"]);
    } else {
      console.log(this.firstName + " è più giovane di " + obj["firstName"]);
    }
  };
}

let persona1 = new User("Davide", "Aprea", 23, "Milano");

let persona2 = new User("Hassan", "Sahraoui", 35, "Reggio Emilia");

persona1.confrontaEtà(persona2);






let nameInput = document.querySelector("#name");
let lastname = document.querySelector("#surname");

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  padrone = function (obj) {
    if (this.ownerName == obj["ownerName"]) {
      console.log(
        this.petName + " e " + obj["petName"] + " hanno lo stesso padrone"
      );
    } else {
      console.log(
        this.petName + " e " + obj["petName"] + " non hanno lo stesso padrone"
      );
    }
  };
}

let gatto1 = new Pet("Mimì", "Lucio", "gatto", "soriano");
let cane1 = new Pet("Lacky", "Lucio", "cane", "Pastore Tedesco");

gatto1.padrone(cane1);
