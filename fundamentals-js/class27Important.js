//Clase SecondPerson y que va a tener un metodo llamado 'constructor' que es el que se va a ejecutar cuando tengamos objetos de esta clase. ES2015

//FUNDAMENTOS DE JAVASCRIPT 2018 - CLASE 27

class SecondPerson {
    constructor(name, lastname, heightt) {
        this.name = name;
        this.lastname = lastname;
        this.heightt = heightt;
    }

    sayHello(fn) {
        console.log(`Hi! my name is ${this.name} ${this.lastname}`)
        if(fn){
            fn(this.name, this.lastname, false)
        }
    }

    height() {
        if(this.heightt >= 1.8) {
            console.log(`${this.name} ${this.lastname} is taller`)
        } else {
            console.log(`${this.name} ${this.lastname} is not taller`)
        }
    }
}

class SecondDeveloper extends SecondPerson {
    constructor(name, lastname, heightt) {
        //asi se llama al contructor de la clase padre
        super(name, lastname, heightt) 
    }

    sayHello(fn) {
        console.log(`Hi! My name is ${this.name} ${this.lastname} and I am a developer`)
        if(fn){
            fn(this.name, this.lastname, true)
        }
    }
}

function answerSayHello(name, lastname, developer) {
    console.log(`Nice day! ${name} ${lastname}`)
    if(developer) {
        console.log("Wow! I do not know you are developer. It is a pleasure!")
    }
}

const secondPerson = new SecondPerson('Abel', 'Arbildo', 1.62)
const secondDeveloper = new SecondDeveloper('Abel', 'Arbildo', 1.62)

// secondPerson.sayHello();
// secondPerson.height();

secondPerson.sayHello();
secondPerson.sayHello(answerSayHello);
secondPerson.height();

secondDeveloper.sayHello(answerSayHello);
secondDeveloper.sayHello();

