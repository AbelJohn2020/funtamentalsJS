//FUNDAMENTOS DE JAVASCRIPT 2018 - CLASE 23

// clases in js is the same of prototypes

// and to save in this object that we are building in the RAM, we can reference this object in this function like a "THIS"
// y para guardarlo dentro de este objeto que ese esta contruyendo dentro de la memoria, podemos hacer referencia a ese objeto dentro de esta funcion como 'this'.
function Person(name, lastname, heightt) {
    this.name = name; // name after this is the atribute of the created object and name after equal sign is the value of the paramether.
    this.lastname = lastname

    this.heightt = heightt
}

Person.prototype.sayHello = function() {
    console.log(`Hello my name is: ${this.name} ${this.lastname}`)
}

Person.prototype.height = function () {
    if(this.heightt >= 1.8) {
        console.log(`${this.name} ${this.lastname} is taller`)
    } else {
        console.log(`${this.name} ${this.lastname} is not taller`)
    }
}

// new before the prototype is the responsible to create a new object, and that object is going to be assigned like a prototype, the protorype that we assigned after.

const person = new Person('Abel', 'Arbildo', 1.62);

person.sayHello();
person.height();
