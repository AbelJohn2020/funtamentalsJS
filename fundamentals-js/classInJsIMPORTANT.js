//FUNDAMENTOS DE JAVASCRIPT 2018 - CLASE 23

// clases in js is the same of prototypes

// and to save in this object that we are building in the RAM, we can reference this object in this function like a "THIS"
// y para guardarlo dentro de este objeto que ese esta contruyendo dentro de la memoria, podemos hacer referencia a ese objeto dentro de esta funcion como 'this'.


// __proto__ apunta al protoripo que tiene la funcion que en este caso es el objeto, son todos los metodos que tienen todos los objetos y todos los atributos que tienen todos los objetos

// la herencia como tal no existe en JS no existen clases sino prototipos, existe la herencia prototipada. Y funciona cuando a un objeto de desarrollador como en este caso person se le decia que ejecute el metodo "height" lo que iba a hacer era dijarse en el en su prototipo __proto__ si encuentra ese metodo sino lo encuentra ira a buscarlo al prototipo de ese prototipo y asi sucesivameente se pasaran mensajes entre los prototipos hasta ver si alguno lo resuelve. Si ninguno lo llega a resolver llegara hasta object y object tratara de ejecutar ese metodo y sino puede ejecutarlo, se lanzara un error en JS.

function ComesFrom(sonPrototype, faherPrototype) {
    const fn = function() {};
    fn.prototype = faherPrototype.prototype;
    sonPrototype.prototype = new fn;
    sonPrototype.prototype.constructor = sonPrototype;
}
function Person(name, lastname, heightt) {
    this.name = name; // name after this is the atribute of the created object and name after equal sign is the value of the paramether.
    this.lastname = lastname

    this.heightt = heightt
}

function Developer(name, lastname) {
    this.name = name;
    this.lastname = lastname;
}

// PERSON
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

// DEVELOPER
ComesFrom(Developer, Person)
Developer.prototype.sayHello = function () {
    console.log(`My name is ${this.name} ${this.lastname} and I'm a developer`)
}

// new before the prototype is the responsible to create a new object, and that object is going to be assigned like a prototype, the protorype that we assigned after.


const person = new Person('Abel', 'Arbildo', 1.62);
const developer = new Developer('Abel', 'Arbildo');

person.sayHello();
person.height();

developer.sayHello();
